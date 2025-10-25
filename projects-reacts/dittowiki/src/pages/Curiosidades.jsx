import React from "react";

function Curiosidades() {
  return (
    // Container principal da página com padding, largura máxima e centralização
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>

      {/* Título principal da página */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Curiosidades sobre o NewJeans
      </h1>

      {/* Container que agrupa todos os cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>

        {/* Card 1: Debut surpresa */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Debut surpresa</h3>
          <p>O grupo estreou em julho de 2022 sem anúncio prévio, pegando os fãs de surpresa.</p>
        </div>

        {/* Card 2: Nome do grupo */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Nome do grupo</h3>
          <p>“NewJeans” simboliza algo fresco, novo, e a ideia de deixar uma “marca duradoura” como um jeans que se molda ao corpo com o tempo.</p>
        </div>

        {/* Card 3: Estilo musical */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Estilo musical</h3>
          <p>Misturam R&B, pop e dance, criando um som retrô e moderno ao mesmo tempo.</p>
        </div>

        {/* Card 4: Primeiro EP */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Primeiro EP</h3>
          <p>O primeiro EP se chama “New Jeans” e inclui hits como Attention e Hype Boy.</p>
        </div>

        {/* Card 5: Integrantes multi-talento */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Integrantes multi-talento</h3>
          <p>Além de cantar e dançar, algumas integrantes também participam de produção de coreografias e roteiros de vídeos.</p>
        </div>

        {/* Card 6: Popularidade instantânea */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Popularidade instantânea</h3>
          <p>O grupo conquistou fãs globalmente, incluindo países fora da Coreia do Sul, apenas meses após a estreia.</p>
        </div>

        {/* Card 7: Colaborações visuais */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Colaborações visuais</h3>
          <p>NewJeans é conhecido por trabalhar com fotógrafos e estilistas renomados, criando imagens icônicas para lançamentos e material promocional.</p>
        </div>

        {/* Card 8: Influência da cultura pop */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Influência da cultura pop</h3>
          <p>Muitos clipes e conceitos do grupo são inspirados nos anos 90 e 2000, com referências de moda, música e estética vintage.</p>
        </div>

        {/* Card 9: Fandom */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f0f0ff", borderRadius: "10px" }}>
          <h3>Fandom</h3>
          <p>O fandom oficial se chama “Bunnies”, e os fãs são conhecidos por apoiar o grupo com muita criatividade nas redes sociais.</p>
        </div>

        {/* Card 10: Vídeos virais */}
        <div style={{ flex: "1 1 30%", padding: "10px", backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
          <h3>Vídeos virais</h3>
          <p>Alguns vídeos do grupo viralizaram rapidamente no TikTok, ajudando a popularizar músicas como Hype Boy fora da Coreia.</p>
        </div> 
        
        {/* Imagem do Bernice - Mascote */}
        <img 
          src="/imagens/bernice.png" 
          alt="Bernice" 
          style={{ width: "200px", margin: "20px 0", borderRadius: "10px" }} 
        />
    
      </div> {/* Fecha a div que contém todos os cards */}
    </div> /* Fecha o container principal */
  );
}

// Exporta o componente para ser usado em outras partes do app
export default Curiosidades;
