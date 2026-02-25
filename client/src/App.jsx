import React from "react";
import { Routes, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Result from "./pages/result";
import Buycredit from "./pages/Buycredit";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Homepage />
      <Result/>
      <Buycredit/>
      </Routes>
      
    </div>
  );
}

export default App;
