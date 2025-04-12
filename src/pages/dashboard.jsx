// src/pages/dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <button type="button" onClick={() => navigate("/usuarios")}>usuarios</button>
        <button type="button">botón 2</button>
        <button type="button">botón 3</button>
      </aside>
      <main className="main-content">
        {/* Aquí irá el contenido del dashboard */}
      </main>
    </div>
  );
}

export default Dashboard;