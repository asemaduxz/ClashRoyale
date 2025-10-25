// Função: um bloco de código que quando você roda, executa uma ação

// Função declarada (tem nome) que possui um parâmetro (argumento)
saudacao("João");
function saudacao(nome)
{
    console.log("Olá, " + nome);
}

// Função declarada que possui um retorno
function soma(x, y)
{
    return x + y;
}
let resultado = soma(17, 25);
console.log(resultado);

// Função anônima - sem nome
let subtrair = function(x, y)
{
    return x - y;
}
console.log(subtrair(100, 55));

// Função seta (arrow function) - Forma padrão
let multiplicar = (x, y) => {
    return x * y;
}
console.log(multiplicar(12, 5));

// Função seta em uma linha
let dobro = x => x * 2;
console.log(dobro(11));

// Função com valor padrão - default
function cumprimentar(nome = "visitante")
{
    console.log("Oi, " + nome);
}
cumprimentar("Fulano");

// Função dentro de objetos
let cachorro = {
    nome: "Amendoim",
    raca: "Shitzu", 
    latir: function(){
        console.log("au au!");
    }
}
cachorro.latir();

// Função recursiva
function contagemRegressiva(x)
{
    if(x <= 0)
    {
        return;
    }
    console.log(x);
    contagemRegressiva(x - 1);
}
contagemRegressiva(10);

// Crie oito funções diferentes (uma de cada tipo) que tenha como entrada um ano menor do que 2025 e tenha como retorno a idade do usuário. 

//1. Função declarada (tem nome) que possui um parâmetro (argumento)
function...
//2. Função declarada que possui um retorno
function...
//3. Função anônima - sem nome
//4. Função seta (arrow function) - Forma padrão
//5. Fuo com valor padrão - default
//7. Função dentro de objetos
//8. Função recursiva */ 

