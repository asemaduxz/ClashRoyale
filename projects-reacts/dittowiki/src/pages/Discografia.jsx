import React from "react";

function Discografia() {
  return (
    // Container principal da página com padding, largura máxima e centralização
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>

      {/* Título principal da página */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Discografia</h1>

      {/* Seção de lançamentos em coreano */}
      <h2>Coreano</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        
        {/* EPs */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>EPs</h3>
          <p>New Jeans (2022)</p>
          <p>Get Up (2023)</p>
        </div>

        {/* Álbuns de remix */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Álbuns de remix</h3>
          <p>NJWMX (2023)</p>
        </div>

        {/* Single álbuns */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Single álbuns</h3>
          <p>OMG (2023)</p>
          <p>How Sweet (2024)</p>
        </div>

        {/* Singles digitais */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Singles digitais</h3>
          <p>Ditto (2022)</p>
          <p>Super Shy (2023)</p>
        </div>

        {/* Singles promocionais */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Singles promocionais</h3>
          <p>Zero (2023)</p>
          <p>Zero (J.I.D Remix) (2023)</p>
          <p>Bubble Gum (2024)</p>
        </div>

        {/* Participações & OSTs */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Participações & OSTs</h3>
          <p>Jon Batiste - "Be Who You Are" (2023)</p>
          <p>"A Time Called You OST" (2023)</p>
          <p>"NewJeans X My Demon" (2023)</p>
        </div>
      </div>

      {/* Seção de lançamentos em outros idiomas */}
      <h2 style={{ marginTop: "40px" }}>Outros idiomas</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        
        {/* Lançamentos em inglês */}
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Inglês</h3>
          <p>OSTs: "Gods" (2023)</p>
        </div>

        {/* Lançamentos em japonês */}
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Japonês</h3>
          <p>Singles: "Supernatural" (2024)</p>
          <p>Singles promocionais: "Right Now" (2024)</p>
        </div>

        {/* Imagem ilustrativa de um album */}
        <img 
          src="/imagens/supernatural.png" 
          alt="Supernatural" 
          style={{ width: "300px", margin: "20px 0", borderRadius: "10px" }} 
        />
      </div>
    </div>
  );
}

// Exporta o componente para ser usado em outras partes do app
export default Discografia;
