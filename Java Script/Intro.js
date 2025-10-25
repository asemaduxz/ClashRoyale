// imprimir uma mensagem no console
console.log("Olá mundo!");

// variáveis
let inteiro = 5;
let float = 1.234;
let string = "isso aqui é um texto";
let bool = true;
console.log(float); // imprimindo uma variável

// operadores

// aritméticos
let A = 7;
let B = 3.5;
console.log(A + B); //somar +
console.log(A - B); //subtração -
console.log(A * B); //multiplicar *
console.log(A / B); //divisão /
console.log(A % B); //resto %

// comparação
console.log(A > B); // maior que >
console.log(A < B); // menor que <
console.log(A >= B); // maior ou igual a =>
console.log(A <= B); // menor ou igual a <=
console.log(A == B); // igual ==

// não considera o tipo da variável
console.log(1 == 1);
console.log(1 == "1");
console.log(1 == true)
console.log(99 == "99");
// === considera o tipo da variável
console.log(1 === 1);
console.log(1 === "1");
console.log(1 === true)
console.log(99 === "99");

// diferença
console.log(1 != 5); 
console.log(1 != 1);
console.log(1 != true);
console.log(1 !== "1");
console.log(1 !== true);

//lógicos

//NOT -> !
console.log(!true) //false
console.log(!false) //true

//AND => &&
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false): //false

// OR -> ||
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false