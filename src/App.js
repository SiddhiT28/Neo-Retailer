import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { RetailerDashboard } from "./pages/RetailerDashboard/RetailerDashboard";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={
          <>
            <NavBar />
            <Login />
          </>
        } />
        <Route path="/register" element={
          <>
            <NavBar />
            <Register />
          </>
        } />
        <Route path="dashboard" element={<RetailerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
