import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login'
import AdminIndex from './AdminIndex';

function Main() {
    return (
            <Router>
                <Routes>
                    <Route path="/"  element={<Login/> } ></Route>
                    <Route path="/index/*"   element={<AdminIndex/>} ></Route>
                </Routes>
            </Router>
    )
}
export default Main