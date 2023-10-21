const numerosImpar = []
const numerosPar = []

const inputNumber = document.getElementById('numero')

const actualizarContadores = () => {
    document.getElementById('contador-impares').innerText = numerosImpar.length
    document.getElementById('contador-pares').innerText = numerosPar.length
}

const agregarNumeroLista = (valor) => {
    const li = document.createElement('li')
    li.textContent = valor    
    document.getElementById('lista').appendChild(li)

    actualizarContadores()
}

const agregarNumero = () => {
    const number = parseInt(inputNumber.value)

    (number % 2 === 0) ? numerosPar.push(number) : numerosImpar.push(number)
        
    agregarNumeroLista(number)
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContadores()

    document.getElementById('agrega-numero')
        .addEventListener('click', agregarNumero)
})