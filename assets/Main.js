import React from 'react';
import {StrictMode } from "react";
import {createRoot } from "react-dom/client";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListEmployee from "./pages/ListEmployee"
import AddEmployee from "./pages/AddEmployee"
import EditEmployee from "./pages/EditEmployee"
import ViewEmployee from "./pages/ViewEmployee"
import Home from "./pages/Home"
import Inscription from './pages/Inscription';
import JobApplicationForm from './pages/JobApplication';
import ListApplication from './pages/ListApplication';
import Dashboard from './pages/Dashboard';
    
function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/inscription"  element={<Inscription/>} />
                <Route path="/apply"  element={<JobApplicationForm/>} />
                <Route path="/dashboard"  element={<Dashboard/>} />
                <Route path="/listApplication"  element={<ListApplication/>} />
                <Route path="/listEmployee"  element={<ListEmployee/>} />
                <Route path="/addEmployee"  element={<AddEmployee/>} />
                <Route path="/editEmployee/:id"  element={<EditEmployee/>} />
                <Route path="/showEmployee/:id"  element={<ViewEmployee/>} />
            </Routes>
        </Router>
    );
}
export default Main;  
if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}