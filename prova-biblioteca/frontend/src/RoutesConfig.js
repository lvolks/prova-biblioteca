import { Routes, Route } from "react-router-dom";

import Cadastro from "./pages/Livro";
import Home from "./pages/home";
import Detalhes from "./pages/detalhes";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detalhes/:isbn" element={<Detalhes />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
    </Routes>
  );
}
