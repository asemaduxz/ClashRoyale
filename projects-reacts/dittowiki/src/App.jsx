import './App.css' // Importa o arquivo CSS global da aplicação
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Importa componentes do React Router
import IntegranteCard from "./components/IntegranteCard"; // Importa o componente de cartão de integrante
import Home from './pages/Home'; // Importa a página Home
import Integrantes from './pages/Integrantes'; // Importa a página Integrantes
import Discografia from './pages/Discografia'; // Importa a página Discografia
import Curiosidades from './pages/Curiosidades'; // Importa a página Curiosidades

function App() {

  return (
    // BrowserRouter habilita navegação via rotas
    <BrowserRouter>
      
      {/* Cabeçalho do site */}
      <header
        style={{
          backgroundColor: "#5e5ab8ff", // Cor de fundo
          padding: "20px", // Espaçamento interno
          textAlign: "center", // Centraliza o conteúdo
          color: "#fff", // Cor do texto padrão
          boxShadow: "0px 2px 5px rgba(0,0,0,0.2)", // Sombra do header
        }}
      >
        {/* Título principal do site */}
        <h1
          style={{
            fontSize: "3em", // Tamanho da fonte
            margin: "0", // Remove margem padrão
            color: "#5b057bff", // Cor do texto
            textShadow: "0 0 10px #ff47e6ff, 0 0 20px #ff99ff", // Sombra colorida
            fontStyle: "italic", // Itálico
            fontWeight: "bold", // Negrito
          }}
        >
          DittoWiki
        </h1>

        {/* Menu de navegação */}
        <nav>
          {/* Links para cada rota */}
          <Link to="/">Home</Link>
          <Link to="/Integrantes">Integrantes</Link>
          <Link to="/Discografia">Discografia</Link>
          <Link to="/Curiosidades">Curiosidades</Link>
        </nav>
      </header>

      {/* Definição das rotas da aplicação */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Página inicial */}
        <Route path="/Integrantes" element={<Integrantes />} /> {/* Página de integrantes */}
        <Route path="/Discografia" element={<Discografia />} /> {/* Página de discografia */}
        <Route path="/Curiosidades" element={<Curiosidades />} /> {/* Página de curiosidades */}
      </Routes>

    </BrowserRouter>
  )
}

// Exporta o componente principal da aplicação
export default App;
