// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Usuarios from "./pages/usuarios";
import AgregarUsuario from "./pages/agregarUsuario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/agregarusuario" element={<AgregarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;