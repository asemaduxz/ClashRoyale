// 1. saudacaoPersonalizada
function saudacaoPersonalizada(nome, horario) {
    if (horario.toLowerCase() === "manhã") {
        console.log(`Bom dia, ${nome}!`);
    } else if (horario.toLowerCase() === "tarde") {
        console.log(`Boa tarde, ${nome}!`);
    } else if (horario.toLowerCase() === "noite") {
        console.log(`Boa noite, ${nome}!`);
    } else {
        console.log(`Olá, ${nome}!`);
    }
}

// 2. calcularDobro
function calcularDobro(numero) {
    return numero * 2;
}

// 3. eMultiploDeCinco
function eMultiploDeCinco(numero) {
    return numero % 5 === 0;
}

// 4. formatarPreco
function formatarPreco(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

// 5. podeTirarCNH (usando função auxiliar verificarMaioridade)
function verificarMaioridade(idade) {
    return idade >= 18;
}

function podeTirarCNH(idade) {
    return verificarMaioridade(idade);
}

// 6. exibirStatusDoAluno
function exibirStatusDoAluno(nome, media) {
    let status;
    if (media >= 7) {
        status = "Aprovado";
    } else if (media >= 5) {
        status = "Recuperação";
    } else {
        status = "Reprovado";
    }
    return `Aluno: ${nome} - Status: ${status}`;
}


// ===== Testando =====
saudacaoPersonalizada("João", "manhã");
console.log(calcularDobro(4)); 
console.log(eMultiploDeCinco(10)); 
console.log(formatarPreco(4.5)); 
console.log(podeTirarCNH(20)); 
console.log(exibirStatusDoAluno("Maria", 6.5));
