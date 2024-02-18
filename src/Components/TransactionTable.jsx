import { useState, useEffect } from "react";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import Table from "./Table";
import Pagination from "./Pagination";
import { useSearch } from "../Context/Context";
import LoadingSpinner from "./LoadingSpinner";

// this component have the entire right side component including the table and the pagination

function generateYayaApiSign(
  apiSecret,
  timestamp,
  method,
  endpoint,
  body = ""
) {

  const preHashString = `${timestamp}${method.toUpperCase()}${endpoint}${body}`;
  const encodedString = Base64.stringify(hmacSHA256(preHashString, apiSecret));

  return encodedString;
}

export default function TransactionTable() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm, currentPage } = useSearch();
  const Base_URL = import.meta.env.VITE_Base_URL;
  const apiSecret = import.meta.env.VITE_YAYA_API_SECRET;
  const apikey = import.meta.env.VITE_YAYA_API_KEY;

  const method = "POST";
  const timestamp = Date.now().toString();
  const endpoint = `/api/en/transaction/search`;
  const URL = `https://corsproxy.io/?${Base_URL}${endpoint}${`?p=${currentPage}`}`;
  const body = JSON.stringify({
    query: `${searchTerm}`,
  });
  

  const yayaApiSign = generateYayaApiSign(
    apiSecret,
    timestamp,
    method,
    endpoint,
    body
  );
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(URL, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            "YAYA-API-KEY": apikey,
            "YAYA-API-TIMESTAMP": timestamp,
            "YAYA-API-SIGN": yayaApiSign,
         
          },
          body: body ? body : null,
        });

        const data = await response.json();

        setData(data); // Update response state with API data
      } catch (error) {
        setError(error); // Handle errors gracefully
      }
      setLoading(false);
    };

    fetchData();
  }, [searchTerm, currentPage]);

  return (
    <div className="relative container p-0 flex-col  ">
      <div className=" ">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <LoadingSpinner className="  " />
          </div>
        ) : (
          <Table tableData={data} />
        )}
      </div>

      {!loading && data && (
        <div className="absolute bg-gray-50 bottom-0 flex justify-center w-full">
          <Pagination totalPages={data.lastPage} />
        </div>
      )}
    </div>
  );
}
