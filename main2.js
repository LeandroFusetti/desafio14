/* // Funcion constructora
class Producto {
    constructor (nombre, precio, stock, id, img){
        this.nombre= nombre.toUpperCase ()
        this.precio= precio
        this.stock= stock
        this.id= id
        this.img= img
    }
        descuento () {
            this.precio = this.precio * 0.9
        }
}


const listaDeProductos = []

listaDeProductos.push  (new Producto ("Escoba", 500, 20, 1, "./img/escobaAmerimaxPlastica.jpg"))
listaDeProductos.push (new Producto ("Plumeros", 600, 15, 2, "./img/plumero-negro-especial-n-50.jpg"))
listaDeProductos.push  (new Producto ("Limpia pisos", 200, 35, 3, "./img/8mClassicX5Lts(diversey).jpg"))
 
//Carrito de compras
const carrito = []
console.log(carrito); */



const URLJSON = "./productos.json"

$("body").prepend('<button id="btn1">Mostrar articulos</button>');

$("#btn1").click(() => { 
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
      let listadeproductos = respuesta;
      for (const producto of listadeproductos) {
        $("body").prepend(` 
                            <div>
                            <h3> ${producto.nombre} </h3>
                            <img src="${producto.img}" width="200px" height="200px"></img>
                            <p> Precio: ${producto.precio} </p>                   
                            <button class="btn" id="${producto.id}">Comprar</button>
                            </div>`
                            )
                        } 
                        let botones =document.getElementById("local")
                        botones.addEventListener ("click", agregar)  
                        function agregar (e){
                            if(e.target.classList.contains("btn")){
                            let comprado =  listaDeProductos.find(producto => producto.id == e.target.id)
                            carrito.push(comprado)  
                        
                            for (const compraste1 of carrito){
                            tienda.innerHTML = " "
                            let compraste = document.createElement ("div")
                            compraste.innerHTML += `<p> Agregaste un articulos al carrito ${compraste1.nombre} </p>`
                            tienda.appendChild(compraste)
                                }
                        }}   
                     }





            }     )
}       )





/* // Crea los productos del Array en el HTML 
for(const producto of listaDeProductos){
  let articulo = document.createElement('div')
  articulo.innerHTML += `<h3> ${producto.nombre} </h3>
                        <img src="${producto.img}" width="200px" height="200px"></img>
                        <p> Precio: ${producto.precio} </p>                   
                        <p> Cantidad disponible: ${producto.stock} </p>
                        <button class="btn" id="${producto.id}">Comprar</button>`
                    

  mercaderia.appendChild(articulo)
}





let botones =document.getElementById("local")
botones.addEventListener ("click", agregar)
        



function agregar (e){
    if(e.target.classList.contains("btn")){
    let comprado =  listaDeProductos.find(producto => producto.id == e.target.id)
    carrito.push(comprado)  

    for (const compraste1 of carrito){
    tienda.innerHTML = " "
    let compraste = document.createElement ("div")
    compraste.innerHTML += `<p> Agregaste un articulos al carrito ${compraste1.nombre} </p>`
    tienda.appendChild(compraste)
        }
}}    

 */