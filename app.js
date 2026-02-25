const readline = require("readline")

const entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

entradaDeDados.question("Qual é o seu peso?: ", function(peso){
    let pesoDaPessoa = peso

    entradaDeDados.question("Qual é a sua altura?: ", function(altura){
        let alturaDaPessoa = altura
    })
})


    
