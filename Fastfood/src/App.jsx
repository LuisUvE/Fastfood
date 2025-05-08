import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProveedorCarrito } from "./contexto/ContextoCarrito.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProveedorCarrito>
      <App />
    </ProveedorCarrito>
  </React.StrictMode>
);

// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Recetas from "./paginas/Recetas";
import DetalleReceta from "./paginas/DetalleReceta";
import Pago from "./paginas/Pago";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recetas />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/receta/:id" element={<DetalleReceta />} />
        <Route path="/carrito" element={<Pago />} />
      </Routes>
    </Router>
  );
}
export default App;