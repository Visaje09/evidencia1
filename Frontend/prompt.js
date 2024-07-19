

/* alert("Ingresa tu nombre por favor") 

let nombre = prompt("Ingrese su nombre a aca")
document.querySelector("div").innerText = nombre
*/

const nombreProducto = new String("Lenovo V4")
console.log(nombreProducto)

const precioProducto = 23
const precioProductoStr = "23";

console.log(precioProducto);
console.log(precioProductoStr)

console.log(precioProducto === precioProductoStr)


// Objeto Producto:
// Objeto literal:
const producto1 = {
    nombre : "Lenovo Thinkpad",
    color : 'Red',
    modelo : 'IU643',
    descripcion: 'Laptop para trabajo liviano',
    precio : 2340000.00,
    getModelo : function(){
        console.log(this.modelo)

    }
}


// Como acceder a los atributos del objeto
console.log(producto1.nombre)
console.log(producto1["color"])

// Invocar metodo getModelo 
producto1.getModelo();

// Sin Desestructuracion
nombresito = producto1.nombre
console.log(nombresito)

// Con Desestructuracion 
const { descripcion , precio } = producto1
console.log(descripcion , precio)

// Object constructor
const Producto = function(nombre , color , precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}
//2 Instancias de producto 
const p1 = new Producto("Lapiz" , "Negro" , 2500)
console.log(p1)

// operador Spread

const medidas = {
    "peso" : "50kg",
    "altura" : "1m",
    "largo" : "50cm"
}

const nuevoProducto = { ...producto1, ...medidas }
console.log(nuevoProducto)