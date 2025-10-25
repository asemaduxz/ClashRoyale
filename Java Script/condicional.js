// declarar um objeto
let pessoa = {
    nome: "João",
    idade: 13,
    profissao: "estudante"
};

// alterar um valor
pessoa.profissao = "sushiman";
//pessoa["profissao"] = "sushiman";

// adicionar mais elementos
pessoa.esporte = "judô";

// deletar um elemento
delete pessoa.idade;

// verificar a existência de alguma propriedade
console.log("endereco" in pessoa); // false
console.log("nome" in pessoa); // true
console.log(pessoa.hasOwnProperty("idade")); //false porque deletamos a idade
console.log(pessoa.idade == undefined); //true porque não existe idade em pessoa
console.log(pessoa.idade !== undefined); //false porque não existe idade em pessoa

if("endereco" in pessoa)
{
    console.log("Já temos um endereço");
}
else {
    pessoa.endereco = "Xique-Xique, Bahia";
}

//pegar todas as chaves de um objeto
let chaves = Object.keys(pessoa);  //[ 'nome', 'profissao', 'esporte' ]
//pegar todos os valores
let valores = Object.values(pessoa); //[ 'João', 'sushiman', 'judô' ]
//pegar as entradas [chave + valor]
let entradas = Object.entries(pessoa); //[[ 'nome', 'João' ],[ 'profissao', 'sushiman' ],['esporte', 'judô' ]]


console.log(pessoa);

// atividade
let livro = {
    título: "A menina que colecionava borboletas",
    autor: "Bruna Vieira",
    anodepublicação: 2014
};
console.log(livro);