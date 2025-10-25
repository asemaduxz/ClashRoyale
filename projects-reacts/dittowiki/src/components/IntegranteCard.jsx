import React from "react";

// Componente de cartão de integrante, recebe propriedades (props) para personalizar o conteúdo
export default function IntegranteCard({ nome, idade, posicao, cor, src }) {
  return (
    // Container principal do cartão
    <div
      style={{
        backgroundColor: cor, // Cor de fundo personalizada pelo prop "cor"
        borderRadius: "15px", // Bordas arredondadas
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // Sombra leve para efeito de profundidade
        padding: "15px", // Espaçamento interno
        textAlign: "center", // Centraliza o conteúdo
        color: "#000000ff", // Cor do texto
        width: "180px", // Largura fixa do cartão
        transition: "transform 0.2s ease-in-out", // Animação suave para hover
      }}
      // Aumenta o cartão quando o mouse passa por cima
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      // Volta ao tamanho normal quando o mouse sai
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Exibe a imagem apenas se a propriedade "src" estiver presente */}
      {src && (
        <img
          src={src} // Caminho da imagem
          alt={nome} // Texto alternativo para acessibilidade
          style={{
            width: "100%", // Ocupa toda a largura do cartão
            height: "180px", // Altura fixa
            objectFit: "cover", // Garante que a imagem se ajuste sem distorcer
            borderRadius: "10px", // Bordas arredondadas na imagem
            marginBottom: "10px", // Espaço abaixo da imagem
          }}
        />
      )}

      {/* Nome do integrante */}
      <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{nome}</h3>

      {/* Idade do integrante */}
      <p style={{ margin: "5px 0" }}>Idade: {idade}</p>

      {/* Posição do integrante no grupo */}
      <p style={{ fontStyle: "italic" }}>{posicao}</p>
    </div>
  );
}
