import React from "react";
import './App.css'
import Main from "./Component/Main";
import LikeCats from "./Component/LikeCats";
import { BrowserRouter, Routes, Route, } from "react-router-dom";



function App() {

  return (
    <div className="App">
       <BrowserRouter basename="/isaevcat">
       <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/like" element={<LikeCats/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;

