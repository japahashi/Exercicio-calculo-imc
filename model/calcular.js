const calcularImc = function(peso, altura){
    let pesoDaPessoa = Number(peso)
    let alturaDaPesssoa = Number(altura)
    
    let resultado = (peso /(altura * altura))
    return resultado.toFixed(2)

}

const statusDaPessoa = function(imc){
    let imcPessoa = Number(imc)
    let status

    if(imc < 18.5){
        status = "Abaixo do peso"

    }else if(imc >= 18.5  && imc <= 24.9){
        status = "Peso normal"

    }else if(imc >= 25 && imc <= 29.9){
        status = "Acima do peso"

    }else if (imc >= 30 && imc <= 34.9){
        status = "Obesidade I"

    }else if(imc >= 35 && imc <= 39.9){
        status = "Obesidade II"

    }else if(imc > 40){
        status = "Obesidade III"

    }
    return status
}

module.exports = {
    calcularImc,
    statusDaPessoa
}