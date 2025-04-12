// src/pages/agregarUsuario.jsx
import React, { useState } from "react";
import "../styles/agregarUsuario.css";

function AgregarUsuario() {
  // Estados para cada campo del formulario
  const [primerNombre, setPrimerNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [primerApellido, setPrimerApellido] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [matricula, setMatricula] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("Profesor");

  const handleSubmit = (evento) => {
    evento.preventDefault();
    // Aquí puedes integrar la lógica para enviar o validar la información
    console.log("Datos del usuario:", {
      primerNombre,
      segundoNombre,
      primerApellido,
      segundoApellido,
      matricula,
      correo,
      contrasena,
      tipoUsuario,
    });
  };

  return (
    <div className="agregarusuario-container">
      <h1>agregar usuario</h1>
      <form className="agregarusuario-form" onSubmit={handleSubmit}>
        {/* Sección para nombres */}
        <div className="form-section">
          <label>nombre(s)</label>
          <div className="nombre-inputs">
            <input
              type="text"
              placeholder="primer nombre"
              value={primerNombre}
              onChange={(e) => setPrimerNombre(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="segundo nombre"
              value={segundoNombre}
              onChange={(e) => setSegundoNombre(e.target.value)}
            />
          </div>
        </div>

        {/* Sección para apellidos */}
        <div className="form-section">
          <label>apellido(s)</label>
          <div className="apellido-inputs">
            <input
              type="text"
              placeholder="primer apellido"
              value={primerApellido}
              onChange={(e) => setPrimerApellido(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="segundo apellido"
              value={segundoApellido}
              onChange={(e) => setSegundoApellido(e.target.value)}
            />
          </div>
        </div>

        {/* Matrícula */}
        <div className="form-section">
          <label>matricula</label>
          <input
            type="text"
            placeholder="ingresa matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>

        {/* Correo institucional */}
        <div className="form-section">
          <label>correo institucional</label>
          <input
            type="email"
            placeholder="ingresa correo institucional"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        {/* Contraseña */}
        <div className="form-section">
          <label>contraseña</label>
          <input
            type="password"
            placeholder="ingresa contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>

        {/* Tipo de usuario */}
        <div className="form-section">
          <label>tipo de usuario</label>
          <select
            value={tipoUsuario}
            onChange={(e) => setTipoUsuario(e.target.value)}
          >
            <option value="Profesor">profesor</option>
            <option value="Coordinador">coordinador</option>
            <option value="Director">director</option>
            <option value="TI">ti</option>
          </select>
        </div>

        <button type="submit">guardar</button>
      </form>
    </div>
  );
}

export default AgregarUsuario;