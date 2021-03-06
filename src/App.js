import React from "react";
import { Routes, Route } from "react-router-dom";
import QueryVerified from "./Verification/QueryVerified";
import Layout from "./Layout";
import Verify from "./Verification/Verify";
import Home from "./Home";
import Mint from "./ProductProvenance/Mint";
import Transfer from "./ProductProvenance/Transfer";
import AckTransfer from "./ProductProvenance/AckTransfer";
import TraceOwners from "./ProductProvenance/TraceOwners";
import TraceProducts from "./ProductProvenance/TraceProducts";
import TraceOwnersBySerial from "./ProductProvenance/TraceOwnersBySerial";
/*
* Routes are defined here
* */
function App() {
  return (
      <React.Fragment>
        <Routes>
            <Route path={""} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={"queryverified"} element={<QueryVerified/>}/>
                <Route path={"verify"} element={<Verify/>}/>
                <Route path={"mint"} element={<Mint/>}/>
                <Route path={"transfer"} element={<Transfer/>}/>
                <Route path={"confirm"} element={<AckTransfer/>}/>
                <Route path={"trace"} element={<TraceOwners/>}/>
                <Route path={"tracebyserial"} element={<TraceOwnersBySerial/>}/>
                <Route path={"list"} element={<TraceProducts/>}/>
                <Route path={"*"} element={<Home/>}/>
            </Route>
        </Routes>

      </React.Fragment>
  );
}

export default App;
