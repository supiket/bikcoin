import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import QueryVerified from "./Verification/QueryVerified";

function App() {
  return (
      <React.Fragment>
        <Routes>
            <Route path={"/queryverified"} element={<QueryVerified/>}/>
            <Route path={"*"} element={<QueryVerified/>}/>
        </Routes>

      </React.Fragment>
  );
}

export default App;
