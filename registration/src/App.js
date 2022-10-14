import React from 'react'
import {Routes,Route} from "react-router-dom";
import Register from "./componenets/register";
import Home from "./componenets/home";
import Login from "./componenets/login";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App