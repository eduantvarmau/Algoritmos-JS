
/*Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.

Los valores deben de ser capturados con promt y mostrados con alertas.*/



let precio = prompt("Ingresa el precio del saco");
console.log(typeof precio);
let descuento =prompt("Ingresa el descuento");
console.log(typeof descuento);
let restaPrecio = precio * descuento /100 ;
let precioTotal = precio - restaPrecio;
alert("El precio final es de: " + precioTotal);

