/*Escribe el código en javascript para:

Declara la variable suma
Declara  una variable llamada x y pídela al usuario.
Declara  una variable llamada y  pídela al usuario.
Asigna el resultado de x más y.
Imprime en consola “La suma es: ” seguida del valor de la variable suma.*/

let x = prompt("Ingrese el valor de x");
console.log(typeof x)
let y = prompt("Ingrese el valor de y");
console.log(typeof y)
let suma = parseFloat(x) + parseFloat(y);
alert("La suma es: " + suma);

