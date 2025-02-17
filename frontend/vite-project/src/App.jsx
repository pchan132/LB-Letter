import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component
import Nav from "./components/nav/Nav.jsx";
import Admin from "./components/main/Admin.jsx";
import Mails from "./components/main/Mails.jsx";
import Home from "./components/main/home-layout/Home.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Mails />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Mails" element={<Mails />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
