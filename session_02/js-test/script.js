// EJE 9: PROMESAS
fetch('https://httpbin.org/get', { method: 'GET' }).then(response => response.json())
.then(data => {
    console.log(data);
})


// EJE 8: DESTRUCTURACION ANIDADA
// const arr1 = [1,2]
// const arr2 = [3,4]

// const arrComp = [...arr1, ...arr2]
// console.log(arrComp);


// EJE 7: Destructuracion ANIDADA
// const person = {
//     name: 'Max',
//     age: 26,
//     address: {
//         street: 'Av. Trabajo'
//     }
// };

// const { address: { street } } = person;

// console.log(street)

// const printAddress = ({ address: { street } }) => {
//     console.log(`Mi calle es ${street}`)
// }

// printAddress(person)


// const animals = ['A', 'B', 'C']
// const [a] = animals
// const [,,c] = animals

// console.log(a, c)

// Ejercicio 2: Let, Const, Var

// Ejercicio 3: Funciones declarativas (Hoisting)
// hi('Max')

// function hi(name) {
//     alert(`Hola ${name}`)
// }

// Ejercicio 4: Funciones expresivas
// const hi = (name) => {
//     alert(`Hola ${name}`)
// }
// hi('Max')


// Ejercicio 5: Funciones arrow
// const hi = name => alert(`Hola ${name}`)
// hi('Max')

// Ejercicio 6: Funciones arrow con contexto
// const tahoe = {
//     name: "Tahoe",
//     getFormattedName: function () {
//         return this.name.toUpperCase()
//     },
    // getFormattedNameDelay: function () {
        // ESTA ES UNA FORMA (GUARDANDO EL CONTEXTO ACTUAL)
        // const self = this;
        // setTimeout(function() {
        //     console.log(self.name.toUpperCase())
        // }, 3000)

    //     setTimeout(() => {
    //         console.log(this.name.toUpperCase())
    //     }, 3000)
    // }
    // mountains: ["Freel"],
    // print: function(delay = 1000) {
    //     setTimeout(() => {
    //         console.log(this.mountains)
    //     }, delay)
    // }
// }

// tahoe.getFormattedNameDelay()

// const { name: mountainName, getFormattedName } = tahoe // destructuracion
// console.log(`El nombre de la montaña es ${mountainName}`) // Print del renombre de la variable
// console.log(getFormattedName()) // aqui THIS ya no funciona en el contexto