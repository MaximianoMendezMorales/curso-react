// HOF (Funciones de alto orden)
const invokeIf = (condition, fnTrue, fnFalse) => {
    condition 
        ? fnTrue()
        : fnFalse()
}

const success = () => console.log('OK');
const fail = () => console.log('NG')

const is2023 = new Date().getFullYear() === 2022

invokeIf(is2023, success, fail)

// EJE 13: Reduce
// EJE 12: MAP

// EJE 11: Filter
// const users = ['Juan', 'Max', 'manuel', 'Pedro']

// const userStartsWithM = users.filter(u => u.toUpperCase().startsWith('M'));
// console.log(userStartsWithM);

// find, findIndex, 

// OTROS TEMAS
// - Clases y objetcos
// - Inmutabilidad
// - Funciones puras e impuraas

// EJE 10: ASYNC/AWAIT
// const getQuote = async () => {
//     try {
//         const response = await fetch('https://randomuser.me/api/', {
//             headers: {
//                 'X-Requested-With': 'XMLHttpRequest'
//             }
//         });

//         const data = await response.json() 
//         const results = data.results
    
//         document.getElementById('user').innerText = `Mails Found: ${results[0].email}`   
//     } catch (e) {
//         console.log(e);
//     }
// }

// getQuote();

// EJE 9: PROMESAS
// fetch('https://randomuser.me/api/', { method: 'GET' })
//     .then(response => response.json())
//     .then((data) => {
//         document.querySelector('#user').innerText = data.results[0].email
//     })
//     .catch(error => {
//         console.log(error);
//     })


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