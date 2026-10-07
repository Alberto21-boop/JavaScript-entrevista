//Problema "soma"
//Fazer um programa para ler dois valores inteiros X e Y, e 
// depois mostrar na tela o valor da soma destes números.

//node scriptSoma.js

const readline = require("node:readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question("Digite o valor de X = ", (x) => {
    const numero1 = Number(x)

    leitor.question("Digite o valor de Y = ", (y) => {
        const numero2 = Number(y)

        const final = numero1 + numero2;

        console.log("A soma dos dois valores é de = " + final)

        leitor.close();
    })
})