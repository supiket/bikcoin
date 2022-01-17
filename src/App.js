import React from "react";
import { Routes, Route } from "react-router-dom";
import QueryVerified from "./Verification/QueryVerified";
import Layout from "./Layout";

function App() {
  return (
      <React.Fragment>
        <Routes>
            <Route path={"/"} element={<Layout/>}>
                <Route path={"queryverified"} element={<QueryVerified/>}/>
                <Route path="*" element={<QueryVerified/>}/>
            </Route>
        </Routes>

      </React.Fragment>
  );
}

export default App;
