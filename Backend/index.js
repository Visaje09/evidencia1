console.log("Carrito de compras.. y mas compras");
/* Templaet string:
alternativa a la concatenacion 
permite incrustar un valor dentro de una string */

const nombreProducto = String("Lenovo V4")
console.log(`El producto es: ${nombreProducto}`);

// Objeto Producto:
// Objeto literal:
const producto1 = {
    nombre : "Lenovo Thinkpad",
    color : 'Red',
    modelo : 'IU643',
    descripcion: 'Laptop para trabajo liviano',
    precio : 2340000.89 ,
    getModelo : function(){
        console.log(this.modelo)

    }
}
producto1.imagen = "Imagen1.jpg"
console.log(imagen)

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