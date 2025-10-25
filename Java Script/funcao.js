function soma(x, y)
{
    let soma = x + y;
    console.log(soma);
}



// 1. Função declarada
function mostrarIdade(ano) {
    console.log("Você nasceu em " + ano);
}
mostrarIdade("2009");

// 2. Função com retorno
function soma(x, y) {
    return x + y;
}
let resultado = soma(15, 2009);
console.log(resultado);

// 3. Função anônima
let subtrair = function(x, y) {
    return x - y;
}
console.log(subtrair(2025, 2009));

// 4. Arrow function
let multiplicar = (x, y) => {
    return x * y;
}
console.log(multiplicar(15, 2009));

// 5. Função com valor padrão
function mostrarAno(ano = "2009") {
    console.log("Bem-vindo, " + ano);
}
mostrarAno("15");
mostrarAno();

// 6. Função dentro de objeto
let pessoa = {
    idade: "15",
    ano: "2009", 
    comparar: function() {
        console.log(this.idade < this.ano);
    }
}
pessoa.comparar();

// 7. Função recursiva
function contagemRegressiva(x) {
    if(x <= 0) {
        return;
    }
    console.log(x);
    contagemRegressiva(x - 1);
}
contagemRegressiva(2009);
