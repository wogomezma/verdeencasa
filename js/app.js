
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

function Producto(id, nombre, precio) {
  this.id = id;
  this.nombre = nombre;
  this.precio = precio;
  productos.push({id: this.id, nombre: this.nombre, precio: this.precio });
}




const indiceold = localStorage.getItem("indice")

const producto1 = new Producto(1, "Infusion Relajante", 10);
const producto2 = new Producto(2, "Infusion Digestiva", 20);
const producto3 = new Producto(3, "Infusion Antioxidante", 30);
let cart = [];
let carro = []
let productoold = "INFUSION"



const dibujarProductos = () => {
let contenedor = document.getElementById("container");
contenedor.innerHTML = "";

productos.forEach((producto, indice) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  let html = `
      <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.id}. $${producto.precio} x gramo</p>
      <a href="#cart" class="btn btn-primary" onClick="agregarAlCarrito(${indice})">Comprar</a>
    </div>
      `;
  card.innerHTML = html;
  contenedor.appendChild(card);
});
}


console.log(indiceold);



const agregarAlCarrito = (indice) => {
       let option = indice 
      let contenedor1 = document.getElementById("container");
      contenedor1.innerHTML = "";
      let contenedor2 = document.createElement("div");
        contenedor2.innerHTML = `
        <h3>CALCULO FORMULA ${productoold}</h3>
    <div class="contact-card">
      <div class="form">
        <div class="column-1">
          <label for="name">Dias</label>
          <label for="name">Veces al dia</label>
          </div>
        <div class="column-2">
          <input class="field" type="text" name="dias" id="dias">
          <input class="field" type="text" name="veces" id="veces">
          <button class="btn btn-primary" id="enviarInfo">Calcular</button>
        </div>
      </div>
    </div>
        `;
        contenedor1.appendChild(contenedor2);
      

      const agregarcarrtiostr= JSON.stringify(indice)
      localStorage.setItem("indice", agregarcarrtiostr)


        const button = document.getElementById('enviarInfo');

button.onclick = function click() {
  let dias = document.getElementById("dias").value;
  let veces = document.getElementById("veces").value;
  let option = indice
  console.log(dias);
  console.log(veces);
  console.log(option);


  switch (option) {
    case "0":
      option = 0
      productoold = "Infusion Relajante"
      break;
    case "1":
      option = 1
      productoold = "Infusion Digestiva"
      break;
    case "2":
      option = 2
      productoold = "Infusion Antioxidante"
      break;  
    default:
      console.log("error conversion text a number");
      break;
  }


      switch (option) {
        case 0:
            receta = infurelajante(dias, veces)
            precio = compra(producto1.precio, receta)
            console.log("Calculado receta de " + producto1.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
            console.log("hola, calculamos que necesitaras " + receta + "gramos");
            console.log("el valor con envio es de $" + precio);
            let contenedo3 = document.getElementById("container");
            contenedo3.innerHTML = "";
            let contenedo4 = document.createElement("div");
            contenedo4.innerHTML = `
            <h3>Calculado receta de ${producto1.nombre} para ${dias} dias, con ${veces} veces al dia</h3>
            <div class="card-body">
            <p>hola, calculamos que necesitaras ${receta} gramos</p>
            <p>el valor con envio es de $${precio}</p>
            <button class="btn btn-primary" id="comprar">Comprar</button>
            <button class="btn btn-primary" id="nocomprar">No Comprar</button>
            </div>
            `;
            contenedo3.appendChild(contenedo4);

            const button2 = document.getElementById('comprar');
            button2.onclick = function click() {
              cart.push({ productocomprado: producto1.nombre, valor: precio });
              
              console.log(cart);

              let contened = document.getElementById("cart");
              contened.innerHTML = "";
                cart.forEach((cart, indice) => {
                  let card2 = document.createElement("div");
                  card2.classList.add("card", "col-sm-12", "col-lg-3");
                  let html = `
                      <h3>COMPRA REALIZADA</h3>
                      <div class="card-body">
                      <h5 class="card-title">${cart.productocomprado}</h5>
                      <p class="card-text">${indice}. $${cart.valor} con envio incluido</p>
                    </div>
                      `;
                  card2.innerHTML = html;
                  contened.appendChild(card2);
                  localStorage.removeItem("indice")
                  dibujarProductos()
       
            });
            

            };
            
            const button5 = document.getElementById('nocomprar');
            button5.onclick = function click() {
              cart.splice(0);
              localStorage.removeItem("indice")
              let contened2 = document.getElementById("cart");
              contened2.innerHTML = "";
              let card2 = document.createElement("div");
              card2.classList.add("card", "col-sm-12", "col-lg-3");
              let html = `
                  <h3>COMPRA CANCELADA</h3>
                  `;
                  card2.innerHTML = html;
                  contened2.appendChild(card2);
              dibujarProductos()
            }

            break;
        case 1: 
        /*OPTIMIZACION CON DESESRUCTURACION y SPREAD*/
          const [,productoventa] = productos
          console.log(productoventa);
          const {id:idventa, nombre:nombreventa, precio:precioventa} = productoventa
          const datosventa = {
            ...precioventa,
            diasventa: dias,
            recetaventa: infurelajante(dias, veces),
            vecesventa: veces,
          }
          
          console.log(datosventa);
          console.log(idventa, nombreventa, precioventa);
          receta = infurelajante(dias, veces)
          precio = compra(precioventa, receta)
          console.log("Calculado receta de " + nombreventa + " para " + dias + " dias, con " + veces + " veces al dia");
          console.log("hola, calculamos que necesitaras " + receta + "gramos");
          console.log("el valor con envio es de $" + precio);
          let contenedo5 = document.getElementById("container");
          contenedo5.innerHTML = "";
          let contenedo6 = document.createElement("div");
          contenedo6.innerHTML = `
          <h3>Calculado receta de ${nombreventa} para ${dias} dias, con ${veces} veces al dia</h3>
          <div class="card-body">
          <p>hola, calculamos que necesitaras ${receta} gramos</p>
          <p>el valor con envio es de $${precio}</p>
          <button class="btn btn-primary" id="comprar">Comprar</button>
          <button class="btn btn-primary" id="nocomprar">No Comprar</button>
          </div>
          `;
          contenedo5.appendChild(contenedo6);

          const button3 = document.getElementById('comprar');
          button3.onclick = function click() {
            cart.push({ productocomprado: producto2.nombre, valor: precio });
            
            console.log(cart);

            let contened1 = document.getElementById("cart");
            contened1.innerHTML = "";
              cart.forEach((cart, indice) => {
                let card2 = document.createElement("div");
                card2.classList.add("card", "col-sm-12", "col-lg-3");
                let html = `
                    <h3>COMPRA REALIZADA</h3>
                    <div class="card-body">
                    <h5 class="card-title">${cart.productocomprado}</h5>
                    <p class="card-text">${indice}. $${cart.valor} con envio incluido</p>
                  </div>
                    `;
                card2.innerHTML = html;
                contened1.appendChild(card2);
                localStorage.removeItem("indice")
                dibujarProductos()
          });
          

          };

          const button6 = document.getElementById('nocomprar');
          button6.onclick = function click() {
            cart.splice(0);
            localStorage.removeItem("indice")
            let contened2 = document.getElementById("cart");
            contened2.innerHTML = "";
            let card2 = document.createElement("div");
            card2.classList.add("card", "col-sm-12", "col-lg-3");
            let html = `
                <h3>COMPRA CANCELADA</h3>
                `;
                card2.innerHTML = html;
                contened2.appendChild(card2);
            dibujarProductos()
          }

            break;
        case 2:
          receta = infurelajante(dias, veces)
          precio = compra(producto3.precio, receta)
          console.log("Calculado receta de " + producto3.nombre + " para " + dias + " dias, con " + veces + " veces al dia");
          console.log("hola, calculamos que necesitaras " + receta + "gramos");
          console.log("el valor con envio es de $" + precio);
          let contenedo7 = document.getElementById("container");
          contenedo7.innerHTML = "";
          let contenedo8 = document.createElement("div");
          contenedo8.innerHTML = `
          <h3>Calculado receta de ${producto3.nombre} para ${dias} dias, con ${veces} veces al dia</h3>
          <div class="card-body">
          <p>hola, calculamos que necesitaras ${receta} gramos</p>
          <p>el valor con envio es de $${precio}</p>
          <button class="btn btn-primary" id="comprar">Comprar</button>
          <button class="btn btn-primary" id="nocomprar">No Comprar</button>
          </div>
          `;
          contenedo7.appendChild(contenedo8);

          const button4 = document.getElementById('comprar');
          button4.onclick = function click() {
            cart.push({ productocomprado: producto3.nombre, valor: precio });
            
            console.log(cart);

            let contened2 = document.getElementById("cart");
            contened2.innerHTML = "";
              cart.forEach((cart, indice) => {
                let card2 = document.createElement("div");
                card2.classList.add("card", "col-sm-12", "col-lg-3");
                let html = `
                    <h3>COMPRA REALIZADA</h3>
                    <div class="card-body">
                    <h5 class="card-title">${cart.productocomprado}</h5>
                    <p class="card-text">${indice}. $${cart.valor} con envio incluido</p>
                  </div>
                    `;
                card2.innerHTML = html;
                contened2.appendChild(card2);
                localStorage.removeItem("indice")
                dibujarProductos()
          });
          

          };

          const button7 = document.getElementById('nocomprar');
          button7.onclick = function click() {
            cart.splice(0);
            localStorage.removeItem("indice")
            let contened2 = document.getElementById("cart");
            contened2.innerHTML = "";
            let card2 = document.createElement("div");
            card2.classList.add("card", "col-sm-12", "col-lg-3");
            let html = `
                <h3>COMPRA CANCELADA</h3>
                `;
                card2.innerHTML = html;
                contened2.appendChild(card2);
            dibujarProductos()
          }
            break;
        default:
            console.log("error calculo")
            dibujarProductos()
            break;
    }
    

    
    };
  };

/* OPTIMIZACON CODIGO */

  indiceold === null ? dibujarProductos() : carritolleno()


    function carritolleno () {
    indice = indiceold
    switch (indiceold) {
      case "0":
         productoold = "Infusion Relajante (Producto en carrito pendiente para finalizar)"
        break;
      case "1":
        productoold = "Infusion Digestiva (Producto en carrito pendiente para finalizar)"
        break;
      case "2":
          productoold = "Infusion Antioxidante (Producto en carrito pendiente para finalizar)"
        break;  
      default:
        console.log("error conversion text a number");
        break;
    }
    localStorage.removeItem("indice")
    console.log("carro con productos");
    console.log(indice);
    agregarAlCarrito(indice)
    localStorage.setItem("indice", indice) }

/*   if (indiceold === null) {
    console.log("carro vacio")
    dibujarProductos()
  }
  else {
  indice = indiceold
  switch (indiceold) {
    case "0":
       productoold = "Infusion Relajante (Producto en carrito pendiente para finalizar)"
      break;
    case "1":
      productoold = "Infusion Digestiva (Producto en carrito pendiente para finalizar)"
      break;
    case "2":
        productoold = "Infusion Antioxidante (Producto en carrito pendiente para finalizar)"
      break;  
    default:
      console.log("error conversion text a number");
      break;
  }
  localStorage.removeItem("indice")
  console.log("carro con productos");
  console.log(indice);
  agregarAlCarrito(indice)
  localStorage.setItem("indice", indice)


  }; */


 
