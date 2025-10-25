function CardapioItem(props) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
            maxWidth: "200px"
        }}>
            <h2>{props.nome}</h2>
            <p>{props.descricao}</p>
            <strong>R$ {props.preco}</strong>
        </div>
    )
}
export default CardapioItem