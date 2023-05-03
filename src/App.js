import logo from "./logo.svg";
import "./App.css";
import CustomTable from "./By-redux/CustomTable";
import ProductListing from "./By-redux-thunk/ProductListing";
import CustomDataTable from "./By-redux-thunk/CustomDataTable";
import AddFields from "./Add-form/AddFields";
import Navbar from "./components/Navbar";
import RecursionData from "./components/RecursionData";
import { familyTree } from "./components/recursion/data";
import MForm from "./components/multi-step-form/MForm";
import ReduxMasterFile from "./redux-crud/ReduxMasterFile";
import Master from "./CodeCamp/Master";
// import Parent from "./By-redux/Parent";
// import {ProductListing} from "./By-redux-thunk"

function App() {
  return (
    <div>
      <header>
        {/* <Parent /> */}
        {/* <CustomTable /> */}
        {/* <ProductListing /> */}
        {/* <CustomDataTable /> */}
        {/* <Navbar /> */}
        {/* <AddFields /> */}
        {/* <RecursionData data={familyTree} /> */}
        {/* <MForm /> */}
        <ReduxMasterFile />
        {/* <Master /> */}
      </header>
    </div>
  );
}

export default App;
