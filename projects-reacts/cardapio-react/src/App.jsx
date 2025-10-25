import './App.css'
import CardapioItem from './components/Cardapioitem'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Contato from './pages/Contato';
import Cardapio from './pages/Cardapio';

function App() {

  return (
   <BrowserRouter>
      <nav style={{
        display: "flex",
        gap: "20px",
        background: "#f8f8f8",
        padding: "10px",
        borderBottom: "1px solid #ccc"
      }}>  <Link to="/">Home</Link>
        <Link to="/cardapio">Cardápio</Link>
        <Link to="/contato">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
