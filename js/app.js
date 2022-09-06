/*Desafio 1 Complementario Crear un algoritmo utilizando un ciclo */
/*
let option = prompt(`Elija una opcion:
1: Tabla de multiplicar
2: Serie Fibonacci
3: Numeros Pares
`);


switch (option) {
    case "1":
            let w = prompt("ingrese la tabla de multiplicar que desea");
            let h = 1;
            let rta = 0;
            while(h<=10){
                rta=h*w;
                console.log(w + " x " + h + " = 1" +  rta);
                h++;
            }
        break;
        case "2":
            let x = prompt("ingrese variable x");
            let y = prompt("ingrese variable y");
            function GenerateFibonacci(number){
    
                var fibonacci = [];
                fibonacci[0] = x;
                fibonacci[1] = y;
                for (var i = 2; i < number; i++) {
                  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
                return fibonacci;
                }
                var f = GenerateFibonacci(10);
                console.log(f);
            break;
            case "3":
                let t = prompt("Cuantas series deseas?");
                let z = 1;
                let k = 2;
                let rta2 = 0;
                do {
                    rta2=k*z;
                    console.log(z + ": " + rta2);
                    z++;
                  } while (z <= t);
            break;

    default:
        break;
}*/

/* Desafio 2 Simulador interactivo */

console.log("Bienvenido a Arma tu Infusión");

let option = prompt(`Elija una de las siguientes opciones:
1: Infusión Relajante(a base de plantas medicinales).
2: Infusión Digestiva (Perfecta para despues de las comidas)
3: Infusión Antioxidante (previene el envejecimiento celular). 
`);

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


/* DATOS PARA ARMAR RECETA */

let dias = prompt("Para cuantos dias requieres calcular la receta");
let veces = prompt("Cuantas tazas al dia vas a consumir");
let receta
let precio

  /* SWITCH PARA EJECUTAR OPERACION DE RECETA */


switch (option) {
    case "1":
        receta = infurelajante(dias, veces)
        precio = compra(10, receta)
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        break;
    case "2":
        receta = infudigestiva(dias, veces)
        precio = compra(20, receta)
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        break;
    case "3":
        receta = infuantioxidante(dias, veces)
        precio = compra(30, receta)
        console.log("hola, calculamos que necesitaras " + receta + "gramos");
        console.log("el valor con envio es de $" + precio);
        break;

    default:
        console.log("opcion invalida")
        break;
}


/*OPCION DE COMPRAR*/


let option2 = prompt(`Confirmanos si estas deacuerdo con la compra:
1: Si.
2: No.
`);

let envio = prompt("confirmanos tu direccion con ciudad y pais a donde deseas recibir el producto");

switch (option2) {
    case "1":
        console.log("COMPRA REALIZADA, el envio llegara en maximo 5 dias habiles, recuerda que debes cancelar $" + precio + " una vez llegue a tu domicilio en " + envio);
        break;
    case "2":
        console.log("COMPRA CANCELADA, gracias por usar nuestro servicio");
        break;
    default:
        console.log("no tenemos datos");
        break;
}

