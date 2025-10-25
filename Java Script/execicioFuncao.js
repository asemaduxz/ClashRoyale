// 1. Saudação simples
function dizerOla(nome) {
    console.log("Olá, {nome}!");
}

// 2. Somar dois números
function somar(a, b) {
    return a + b;
}

// 3. Calcular a área de um retângulo
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

// 4. Verificar maioridade
function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 5. Calcular o quadrado
function quadrado(numero) {
    return numero * numero;
}

// 6. Converter horas para minutos
function horasParaMinutos(horas) {
    return horas * 60;
}

// 7. Contar caracteres
function contarCaracteres(texto) {
    return texto.length;
}

// 8. Primeira letra maiúscula
function capitalizar(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}

// 9. Calcular média
function media(a, b, c) {
    return (a + b + c) / 3;
}

// 10. Reverter string
function reverterTexto(texto) {
    return texto.split("").reverse().join("");
}

// 11. Verificar número par
function ehPar(numero) {
    return numero % 2 === 0;
}

// 12. Gerar número aleatório (1 a 10)
function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// 13. Repetir texto
function repetirTexto(texto, n) {
    return texto.repeat(n);
}

// 14. Encontrar o maior número
function maiorNumero(a, b) {
    return a > b ? a : b;
}

// 15. Contar vogais
function contarVogais(texto) {
    const vogais = "A, E, I, O, U";
    return texto.split("").filter(letra => vogais.includes(letra)).length;
}

// 16. Criar lista numerada
function listaNumerada(n) {
    let lista = [];
    for (let i = 1; i <= n; i++) {
        lista.push(i);
    }
    return lista;
}

// 17. Soma de um array
function somarArray(numeros) {
    return numeros.reduce((soma, num) => soma + num, 0);
}

// 18. Palíndromo
function ehPalindromo(palavra) {
    let invertida = palavra.split("").reverse().join("");
    return palavra.toLowerCase() === invertida.toLowerCase();
}

// 19. Contar palavras
function contarPalavras(frase) {
    return frase.trim().split(/\s+/).length;
}

// 20. Converter segundos para mm:ss
function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let restoSegundos = segundos % 60;
    return {String(minutos).padStart(2, "0")}:{String(restoSegundos).padStart(2, "0")};
}


// ====== Testes ======
dizerOla("Madu");
console.log(somar(5, 3));
console.log(calcularAreaRetangulo(4, 6));
console.log(ehMaiorDeIdade(17));
console.log(quadrado(5));
console.log(horasParaMinutos(2));
console.log(contarCaracteres("JavaScript"));
console.log(capitalizar("javascript"));
console.log(media(5, 7, 9));
console.log(reverterTexto("banana"));
console.log(ehPar(8));
console.log(numeroAleatorio());
console.log(repetirTexto("Oi ", 3));
console.log(maiorNumero(10, 20));
console.log(contarVogais("Abacaxi"));
console.log(listaNumerada(5));
console.log(somarArray([1, 2, 3, 4, 5]));
console.log(ehPalindromo("arara"));
console.log(contarPalavras("Eu gosto de programar em JavaScript"));
console.log(formatarTempo(125));
