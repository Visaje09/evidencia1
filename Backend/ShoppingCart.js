const carrito = [
    {
        nombre : "Lenovo Thinkpad",
        descripcion : "Laptop para oficina",
        tipoProducto : "Computador Portatil",
        modelo : "VG6",
        precio : {
            minimoVenta : 3000000,
            compra : 1000000
        },
        caracteristicas:{
            dimensiones:{
                alto: "2 cm",
                ancho: "50 cm",
                largo: "30 cm",
            },
            fabricacion:{
                pais: "Taiwan",
                fecha: new Date('2017-05-02')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "Lenovo Pro Gaming",
        descripcion : "Laptop para juegos",
        tipoProducto : "Computador Portatil",
        modelo : "MS1",
        precio : {
            minimoVenta : 4500000,
            compra : 2000000
        },
        caracteristicas:{
            dimensiones:{
                alto: "3 cm",
                ancho: "75 cm",
                largo: "40 cm",
            },
            fabricacion:{
                pais: "Los Angeles",
                fecha: new Date('2022-08-15')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "Iphone 15",
        descripcion : "Celular alta gama",
        tipo : "Dispositivo movil",
        modelo : "15",
        precio : {
            minimoVenta : 6000000,
            compra : 3000000
        },
        caracteristicas:{
            dimensiones:{
                alto: "2 cm",
                ancho: "23 cm",
                largo: "30 cm",
            },
            fabricacion:{
                pais: "China",
                fecha: new Date('2024-11-08')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "Samsung J21",
        descripcion : "Celular gama baja",
        tipoProducto : "Dispositivo movil",
        modelo : "J21",
        precio : {
            minimoVenta : 9000,
            compra : 400000
        },
        caracteristicas:{
            dimensiones:{
                alto: "2 m",
                ancho: "35 cm",
                largo: "40 cm",
            },
            fabricacion:{
                pais: "China",
                fecha: new Date('2015-02-04')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
    {
        nombre : "OPPO 8",
        descripcion : "Celular Gama media",
        tipoProducto : "Dispositivo movil",
        modelo : "8",
        precio : {
            minimoVenta : 1400000,
            compra : 700000
        },
        caracteristicas:{
            dimensiones:{
                alto: "2 cm",
                ancho: "24 cm",
                largo: "42 cm",
            },
            fabricacion:{
                pais: "Mauritania",
                fecha: new Date('2023-11-28')
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra
        }
    },
]

// recorrer el carrito de compras
// metodo forEach
// no retorna un nuevo arreglo

carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === "Taiwan")
        console.log(producto.nombre)

});

// metodo de transformacion map
// map retorna un nuevo arreglo
let preciosCompra = carrito.map((producto)  => {
    return producto.precio.compra
})

//filter : recorre el arreglo buscando elementos
//         que concuerden con la condicional establecida en el filtro

/*
let productosTaiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === 'Taiwan'

})

console.log(productosTaiwan);
*/  

console.log(preciosCompra)

//calculo del total del inventario
let total = 0
carrito.forEach(producto => {
    //acumular el valor de compra de cada producto recorrido en la airable total
    total += producto.precio.compra
})
console.log(`El valor del intentario es : ${total}`)
// utilizando el metodo reduce: reduce a un solo valor el arreglo, con base en una expresion

let inventario = carrito.reduce((total , producto)=>{
    return total + producto.precio.compra
}, 
0)

console.log(`El valor del intentario es : ${inventario}`)

//ejecutar el metodo: obtenerPrecioCompra
// console.log(carrito[0].obtenerPrecioCompra())

for (const producto of carrito) {
    const { nombre, tipoProducto, modelo, caracteristicas : { largo }, paisFabricacion } = producto;
    console.log(`Nombre: ${nombre}, Tipo: ${tipoProducto}, Modelo: ${modelo}, Largo: ${largo}, País de fabricación: ${paisFabricacion}`);
  }


carrito.forEach(producto => {
    if(producto.caracteristicas.fabricacion.pais === "China")
        console.log("producto proveniente de china :" + producto.nombre)

});



carrito.forEach(producto => {
    if(producto.precio.minimoVenta  <= 10000)
        console.log("el producto menor a 10000:" + producto.nombre)

});






let productosTaiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === 'Taiwan'

})
