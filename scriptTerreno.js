//Problema "terreno"
//Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular 
// com uma casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. 
// Em seguida, o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno,
// ambos com duas casas decimais, conforme exemplo.

//node scriptTerreno.js

const readline = require("node:readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a largura: ", (respostaLargura) => {
    const largura = Number(respostaLargura);

    leitor.question("Digite o comprimento: ", (respostaComprimento) => {
        const comprimento = Number(respostaComprimento);

        const area = largura * comprimento


        leitor.question("Qual é o preço do metro quadrado = ", (preco) => {
            const precoTerreno = Number(preco);

            const valorTotal = area * precoTerreno

            
        console.log("Area do terreno = " + area.toFixed(2))
        console.log("Preço do terreno = " + valorTotal.toFixed(2))

         leitor.close();

        })
    });
});