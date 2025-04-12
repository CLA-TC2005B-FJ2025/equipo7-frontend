// src/pages/login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Creamos la variable para navegar
  const navigate = useNavigate();

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log("Intentando iniciar sesión con:", { email, password });
    
    // Aquí puedes agregar tu lógica de autenticación
    // Si la autenticación es exitosa, rediriges al dashboard:
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="••••••"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;