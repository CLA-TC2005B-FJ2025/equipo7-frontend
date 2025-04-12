// src/pages/usuarios.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/usuarios.css";

function Usuarios() {
  const navigate = useNavigate();

  return (
    <div className="usuarios-container">
      <h1>usuarios</h1>
      <div className="usuarios-buttons">
        <button type="button">administrar</button>
        <button type="button" onClick={() => navigate("/agregarusuario")}>
          agregar
        </button>
      </div>
    </div>
  );
}

export default Usuarios;