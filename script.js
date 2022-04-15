// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

let pizzas = [
    {
        ID: 1,
        nombre: 'Muzzarella',
        ingredientes: ['Salsa', 'Mozzarella', 'Aceitunas'],
        precio: 400
    },
    {
        ID: 2,
        nombre: 'Napolitana',
        ingredientes: ['Salsa', 'Tomates', 'Muzzarella', 'Albahaca', 'Aceite Oliva'],
        precio: 500
    },
    {
        ID: 3,
        nombre: 'Jamón',
        ingredientes: ['Salsa', 'Muzzarella', 'Aceitunas', 'Orégano', 'Jamón'],
        precio: 450
    },
    {
        ID: 4,
        nombre: 'Fugazzeta',
        ingredientes: ['Muzzarella', 'Cebolla', 'Orégano', 'Aceitunas', 'Aceite Oliva'],
        precio: 400
    },
    {
        ID: 5,
        nombre: 'Calabresa',
        ingredientes: ['Salsa', 'Muzzarella', 'Provolone', 'Morrones', 'Orégano', 'Aceitunas', 'Longaniza'],
        precio: 600
    },
    {
        ID: 6,
        nombre: 'Palmitos',
        ingredientes: ['Salsa', 'Muzzarella', 'Palmitos', 'Salsa Golf', 'Jamón'],
        precio: 400
    },
];

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.

let pizzasImpares = pizzas.filter(element => element.ID % 2 !== 0);
console.log('PIZZAS CON ID IMPAR:');
pizzasImpares.forEach(element => console.log(`ID ${element.ID}, Pizza ${element.nombre}`));
console.log(''); // Para separar en consola un ejercicio de otro.

// b) ¿Hay alguna pizza que valga menos de $600?

console.log('PIZZAS CON PRECIO MENOR A $600:');
let menor600 = pizzas.filter(element => element.precio < 600);
menor600.forEach(element => console.log(`Pizza ${element.nombre}, $${element.precio}`));
console.log(''); // Para separar en consola un ejercicio de otro.

// c) Los nombres de todos las pizzas.

console.log('NOMBRE DE TODAS LAS PIZZAS:');
let nombres = pizzas.map(element => element = element.nombre);
nombres.forEach(element => console.log(element));
console.log(''); // Para separar en consola un ejercicio de otro.

// d) Los precios de las pizzas.

console.log('PRECIO DE TODAS LAS PIZZAS:');
let precios = pizzas.map(element => element = element.precio);
precios.forEach(element => console.log(`$${element}`));
console.log(''); // Para separar en consola un ejercicio de otro.
// Imprimí solo los precios porque sino el ejercicio quedaba igual al de abajo.

// e) El nombre de cada pizza con su respectivo precio.

console.log('NOMBRE DE CADA PIZZA JUNTO CON SU PRECIO:');
let nombrePrecio = pizzas.map(element => element = {nombre: element.nombre, precio: element.precio});
nombrePrecio.forEach(element => console.log(`La pizza ${element.nombre} cuesta $${element.precio}`));
console.log(''); // Para separar en consola un ejercicio de otro.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸