console.log("Bienvenido a Arma tu Infusión");


/* FUNCIONES DE PREPARACION DE RECETAS*/
function infurelajante(dias, veces) {
    return dias * veces * 3;
  }

function infudigestiva(dias, veces) {
    return dias * veces * 2;
  }

function infuantioxidante(dias, veces) {
    return dias * veces * 5;
   }


  function compra(preciogramo, receta) {
    return preciogramo * receta * 7000;
  }

/* PRODUCTOS */

const productos = [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    productos.push({ nombre: this.nombre, precio: this.precio });
  }



const producto1 = new Producto("Infusion Relajante", 10);
const producto2 = new Producto("Infusion Digestiva", 20);
const producto3 = new Producto("Infusion Antioxidante", 30);
const producto4 = new Producto("Otros", 100);
const carrito = [];



/* SELECCIONAR PRODUCTO */
console.log("te confirmamos los productos que tenemos");

/*const productos = [ producto1, producto2, producto3 ];*/

    console.log(productos);

  /* DATOS PARA ARMAR RECETA */
console.log("Vamos a Armar tu receta personalizada");


let option = prompt(`Elija una de las siguientes opciones:
1: Infusión Relajante(a base de plantas medicinales).
2: Infusión Digestiva (Perfecta para despues de las comidas)
3: Infusión Antioxidante (previene el envejecimiento celular). 
`);


console.log("Escogiste la opcion " + option);

let dias = prompt("Para cuantos dias requieres calcular la receta");
let veces = prompt("Cuantas tazas al dia vas a consumir");
let receta
let precio

  /* SWITCH PARA EJECUTAR OPERACION DE RECETA */
  

switch (option) {
    case "1":
        receta = infurelajante(dias, veces)
        precio = compra(producto1.precio, receta)
        console.log("Calculado receta de " + producto1.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto1.nombre, valor: precio });
        break;
    case "2":
        receta = infudigestiva(dias, veces)
        precio = compra(producto2.precio, receta)
        console.log("Calculado receta de " + producto2.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto2.nombre, valor: precio });
        break;
    case "3":
        receta = infuantioxidante(dias, veces)
        precio = compra(producto3.precio, receta)
        console.log("Calculado receta de " + producto3.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        carrito.push({ productocomprado: producto3.nombre, valor: precio });
        break;

    default:
        console.log("opcion invalida")
        break;
}


/*OPCION DE COMPRAR*/


console.log("contenido del carrito de compras: ");
console.log(carrito);

let option2 = prompt(`Confirmanos si estas deacuerdo con la compra:
 1: Si.
2: No.
`);




switch (option2) {
    case "1":
        let envio = prompt("confirmanos tu direccion con ciudad y pais a donde deseas recibir el producto");
        console.log("COMPRA REALIZADA, el envio llegara en maximo 5 dias habiles, recuerda que debes cancelar $" + precio + " una vez llegue a tu domicilio en " + envio);
        break;
    case "2":
        console.log("COMPRA CANCELADA, gracias por usar nuestro servicio");
        carrito.splice(0);
        console.log("contenido del carrito de compras: ");
        console.log(carrito);
        break;
    default:
        console.log("no tenemos datos");
        break;
}

/* Busqueda y Filtrado de productos*/

let option3 = prompt(`Que deseas Hacer:
 1: Filtrar.
2: Buscar.
`);


switch (option3) {
    case "1":
        let filtrar = prompt(`Que producto deseas filtrar`);
        const filtrado = productos.find((producto) => producto.nombre === filtrar);
        console.log(filtrado);
        break;
    case "2":
        let buscar = prompt(`Confirma el valor que deseas filtrar, te mostraremos los productos apartir del valor que ingreses`);
        let resultado = productos.filter((producto) => producto.precio > buscar);
        console.log(resultado);
        break;
    default:
        console.log("no tenemos datos");
        break;
}


