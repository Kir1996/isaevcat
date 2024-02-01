import React from "react";
import './App.css'
import Main from "./Component/Main";
import LikeCats from "./Component/LikeCats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
       <Router>
       <Routes>
        <Route path="/" exact element={<Main/>}/>
        <Route path="/like" element={<LikeCats/>}/>
        </Routes>
    </Router>
    </div>
  );
}
export default App;

