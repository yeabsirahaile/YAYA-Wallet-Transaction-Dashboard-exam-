import { useState, useEffect } from "react";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import Table from "./Table";
import Pagination from "./Pagination";
import { useSearch } from "../Context/Context";
import LoadingSpinner from "./LoadingSpinner";

function generateYayaApiSign(
  apiSecret,
  timestamp,
  method,
  endpoint,
  body = ""
) {
  const preHashString = `${timestamp}${method.toUpperCase()}${endpoint}${body}`;

  // const shahash = sha256(preHashString);
  // const hashedString = hmacSHA256(shahash, apiSecret).toString();
  // const encodedString = btoa(hashedString);
  const encodedString = Base64.stringify(hmacSHA256(preHashString, apiSecret));
  // const encodedString = Buffer.from("your string here").toString("base64");
  // console.log(preHashString, encodedString);
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
  const URL = `${Base_URL}${endpoint}${`?p=${currentPage}`}`;
  const body = JSON.stringify({
    query: `${searchTerm}`,
  });
  // Empty for GET requests

  const yayaApiSign = generateYayaApiSign(
    apiSecret,
    timestamp,
    method,
    endpoint,
    body
  );
  // const pageNumber = 9;
  // const endpointWithPagination = `${endpoint}?p=${pageNumber}`;
  // const endpointWithfilter = `${endpoint}?p=${pageNumber}`;
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
            // ...other headers
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
    <div className="relative container flex-col ">
      <div className=" ">
        {loading ? (
          <LoadingSpinner className="  " />
        ) : (
          <Table tableData={data} />
        )}
      </div>

      <div className=" absolute bg-slate-600 bottom-0 flex justify-center w-full">
        <Pagination />
      </div>
    </div>
  );
}
