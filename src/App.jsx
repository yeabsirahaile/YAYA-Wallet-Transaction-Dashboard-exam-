import Sidebar from "./Components/Sidebar";
import TransactionTable from "./Components/TransactionTable";
import { SearchProvider } from "./Context/Context";

function App() {
  return (
    <SearchProvider>
      <div className="flex ">
        <Sidebar />
        <TransactionTable />
      </div>
    </SearchProvider>
  );
}

export default App;
