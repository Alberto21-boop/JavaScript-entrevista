//Problema "retangulo"
//Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o 
// valor da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.
//node scriptRetangulo.js

const redline = require("node:readline");

const leitor = redline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a base do retangulo = ", (baseRetangulo) => {
    const base = Number(baseRetangulo);

    leitor.question("Digite a altura do retangulo = ", (alturaRetangulo) => {
        const altura = Number(alturaRetangulo);

         const area = base * altura

         const perimetro = 2 *(base + altura)

         const diagonal =  Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));

         console.log("A area é de = " + area.toFixed(4));
         console.log("O perimetro é de = " + perimetro.toFixed(4));
         console.log("A diagonal é de = " + diagonal.toFixed(4))

           leitor.close();
    });
});