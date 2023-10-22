const numerosImpar = []
const numerosPar = []

const inputNumber = document.getElementById('numero')

const actualizarContadores = () => {
    document.getElementById('contador-impares').innerText = numerosImpar.length
    document.getElementById('contador-pares').innerText = numerosPar.length
}

const agregarNumeroLista = (numero) => {
    document.getElementById('lista').insertAdjacentHTML('afterend', `<li>${numero}</li>`)
    actualizarContadores()
}

const agregarNumero = () => {
    const numero = parseInt(inputNumber.value);

    if (numero % 2 === 0) {
        numerosPar.push(numero)
    } else {
        numerosImpar.push(numero)
    }

    agregarNumeroLista(numero)
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContadores()

    document.getElementById('agrega-numero')
        .addEventListener('click', agregarNumero)
})