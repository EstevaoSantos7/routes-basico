import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Usuarios from "../pages/Usuarios";
import DetalhesUsuario from "../pages/DetalhesUsuario";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/usuarios/:id" element={<DetalhesUsuario/>} />
            </Routes>
        </BrowserRouter >

    )
}