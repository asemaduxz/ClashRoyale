import React from "react"; // Importa o React para criar o componente

function Home() {
  return (
    // Container principal da página, com largura máxima, centralização e estilo visual
    <div style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#f0f0ff",
        borderRadius: "15px",
        boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}>

      {/* Saudação do site com classe para animação */}
      <h2 className="saudacao-site">안녕하세요, 뉴진스입니다!</h2>

      {/* Imagem principal do grupo */}
      <img 
        src="/imagens/newjeans.png" // Caminho da imagem
        alt="NewJeans" // Texto alternativo
        style={{ width: "500px", margin: "20px 0", borderRadius: "10px" }} // Estilo da imagem
      />

      {/* Parágrafo de apresentação do grupo */}
      <p>
        NewJeans é um grupo feminino de cinco membros sob a ADOR. Elas estrearam em 22 de julho de 2022, 
        com o single principal "Attention", antes do lançamento de seu EP de estreia New Jeans em 1 de agosto de 2022.
      </p>

      {/* Seção de redes sociais */}
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
          Acompanhe o grupo nas redes sociais
        </h3>

        {/* Container dos cards de redes sociais */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>

          {/* Card do YouTube */}
          <a href="https://www.youtube.com/channel/UCMki_UkHb4qSc0qyEcOHHJw" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               width: "120px",
               height: "40px",
               backgroundColor: "#FF0000",
               color: "#fff",
               borderRadius: "10px",
               textDecoration: "none",
               fontWeight: "bold",
               boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
               transition: "transform 0.2s",
             }}
             // Efeito de hover para aumentar o card
             onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
             onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            YouTube
          </a>

          {/* Card do Instagram */}
          <a href="https://www.instagram.com/newjeans_official/" 
             target="_blank" 
             rel="noopener noreferrer"
             style={{
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               width: "120px",
               height: "40px",
               background: "linear-gradient(45deg, #feda75, #d62976, #8134af, #515bd4)",
               color: "#fff",
               borderRadius: "10px",
               textDecoration: "none",
               fontWeight: "bold",
               boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
               transition: "transform 0.2s",
             }}
             // Efeito de hover para aumentar o card
             onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
             onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            Instagram
          </a>

        </div>
      </div>

      {/* Aviso de direitos autorais */}
      <div className="disclaimer" style={{ marginTop: "40px", fontSize: "12px", color: "#555" }}>
        Este projeto é apenas para fins educacionais. Todos os direitos pertencem aos respectivos
        proprietários do NewJeans e ADOR.
      </div>
    </div>
  );
}

// Exporta o componente para uso em outras partes do app
export default Home;
