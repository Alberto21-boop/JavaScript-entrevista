//Problema "idades"
//Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com 
// os nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.

//node scriptIdades.js

const readline = require("node:readline");

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o nome da pessoa = ", (nomePessoa) => {
    const nome = String(nomePessoa);

    leitor.question("Agora digite a idade desta pessoa = ", (idadePessoa) => {
        const idade = Number(idadePessoa);

        leitor.question("Agora digite o nome da segunda pesdsoa = ", (nomeSegundaPessoa) => {
            const nomeDois = String(nomeSegundaPessoa);

            leitor.question("E agora por fim digite a idade da segunda pessoa = ", (idadeSegundaPessoa) => {
                const idadeDaSegundaPessoa = Number(idadeSegundaPessoa);

                const media = (idade + idadeDaSegundaPessoa) / 2

                console.log("A idade media de " + nome + " e de " + nomeDois + " é de = " + media);

                 leitor.close()
            })
        })
    })
})