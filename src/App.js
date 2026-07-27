import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { PerfilProfesional } from "./components/perfil-profesional/PerfilProfesional";
import { Formacion } from "./components/formacion/Formacion";
import { Experiencia } from "./components/experiencia/Experiencia";
import { Competencias } from "./components/competencias/Competencias";
import { SobreMi } from "./components/sobre-mi/SobreMi";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="div-padre">
      <Navbar />
      <Hero />
      <PerfilProfesional />
      <Formacion />
      <Experiencia />
      <Competencias />
      <SobreMi />
      <Footer />
    </div>
  );
}

export default App;
