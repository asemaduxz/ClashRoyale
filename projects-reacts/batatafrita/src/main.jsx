import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Carro from "./Carro.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Carro brand="Corsa" />
  </StrictMode>,
)
