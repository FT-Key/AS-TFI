import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Etapa from "./pages/Etapa";
import Documentacion from "./pages/Documentacion";
import VisorPDF from "./pages/VisorPDF";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etapa/:id" element={<Etapa />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/acercade" element={<AboutPage />} />

        {/* Acepta rutas con carpetas → /pdf/etapa1/consigna.pdf */}
        <Route path="/pdf/*" element={<VisorPDF />} />
      </Routes>
    </>
  );
}
