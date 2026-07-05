import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import Solucoes from "@/pages/Solucoes";
import Sobre from "@/pages/Sobre";
import Contato from "@/pages/Contato";
import Portal from "@/pages/Portal";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/portal" element={<Portal />} />
      </Route>
    </Routes>
  );
}
