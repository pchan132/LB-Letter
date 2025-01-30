import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Component
import Nav from "./components/nav/nav.jsx";
import Admin from "./components/main/Admin.jsx";
import Mails from "./components/main/Mails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="Admin" element={<Admin/>}/>
          <Route path="Mails" element={<Mails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
