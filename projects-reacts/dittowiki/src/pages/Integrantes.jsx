import React from "react"; // Importa o React para criar componentes
import IntegranteCard from "../components/IntegranteCard"; // Importa o componente personalizado para cada integrante

function Integrantes() {
  return (
    // Container principal da página, com padding e centralização do conteúdo
    <div style={{ padding: "20px", textAlign: "center" }}>
      
      {/* Logo do site/grupo */}
      <img 
        src="/imagens/logo.png" // Caminho da imagem da logo
        alt="Logo" // Texto alternativo caso a imagem não carregue
        style={{ width: "500px", borderRadius: "10px" }} // Define largura e cantos arredondados
      />

      {/* Container dos cards dos integrantes */}
      <div
        style={{
          display: "flex", // Utiliza flexbox para organizar os cards
          flexWrap: "wrap", // Permite que os cards quebrem para a próxima linha se necessário
          gap: "20px", // Espaço entre os cards
          justifyContent: "center", // Centraliza os cards horizontalmente
        }}
      >
        {/* Cada IntegranteCard representa uma integrante do grupo */}
        <IntegranteCard
          nome="Minji" // Nome da integrante
          idade="21" // Idade da integrante
          posicao="Líder, Vocalista e Rapper" // Cargo/função no grupo
          src="/imagens/minji.png" // Imagem da integrante
          cor="#2a1ff8ff" // Cor de fundo do card (azul)
        />
        <IntegranteCard
          nome="Hanni"
          idade="20"
          posicao="Vocalista e Rapper"
          src="/imagens/hanni.png"
          cor="#ff00c3ff" // Rosa
        />
        <IntegranteCard
          nome="Danielle"
          idade="19"
          posicao="Vocalista"
          src="/imagens/danielle.png"
          cor="#FFFF99" // Amarelo
        />
        <IntegranteCard
          nome="Haerin"
          idade="18"
          posicao="Vocalista e Rapper"
          src="/imagens/haerin.png"
          cor="#58f758ff" // Verde
        />
        <IntegranteCard
          nome="Hyein"
          idade="17"
          posicao="Vocalista e Maknae"
          src="/imagens/hyein.png"
          cor="#c33ffcff" // Roxo
        />
      </div>
    </div>
  );
}

// Exporta o componente para que possa ser usado em outras partes do app
export default Integrantes;
