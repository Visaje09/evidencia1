const nombres = ["Lapiz HB", "Resaltador ", "Borrador de nata"];

//agregar elementos al arreglo:
nombres[3] = "Micropunta"

//consultar un indice especifico

console.log(nombres[2])

//agregar un elemento al principio:
nombres.unshift("Borrador de miga de pan ")

//agregar un elemento al final:
nombres.push("Corrector");

//eliminar elementos del arreglo:
delete nombres[3];

//eliminar elementos del final 
nombres.pop();

//nombres elementos del principio:
nombres.shift()
console.table(nombres);

for( let i=0 ; i<nombres.length ; i++            ){
    console.log(nombres[i])

}

//Operador Spread con arreglos:
const nombres2 = ["Transportador" , "Regla 30 cm"]

let productos = [...nombres, ...nombres2]
const elemento = "compas"
productos = [...productos, elemento]
const transportador = "transportador"
productos = [ productos1, transportador ]



console.table(productos)