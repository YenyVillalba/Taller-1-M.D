//Yeny Villalba
//variables y condiciones

let temperatura = 42
if (temperatura > 30) console.log("hace calor")
else console.log("hace frio")

//ciclo
for (var i = 1; i <= 10; i++) { console.log(i) }

//arreglos
let colores = ["azul", "rojo", "verde"]
console.log(colores[0])

//funciones
function suma(numero, numero2) { return numero + numero2 }
console.log(suma(3, 6))

//json
let libro =
{
    "Genero": "Fantastico",
    "Nombre": "Harry Potter",
    "Autor": "J.K Rowling",
    "Año de Publicacion": "1997",
}
console.log(libro)

//desafio final

let numeros = [2, 5, 6, 78, 3, 2, 1, 4]
function numerosParesDeUnArray(arregloDeEntrada) {
    let arraySalida = []
    for (var i = 0; i < arregloDeEntrada.length; i++) {
        if (esNumeroPar(arregloDeEntrada[i])) {
            arraySalida.push(arregloDeEntrada[i])

        }

    }
    return arraySalida
}
function esNumeroPar(valor) {
    let residuo = valor % 2
    let par = false
    if (residuo == 0) {
        par = true
    }
    else {
        par = false
    }

    return par
}
let arrayDePares = numerosParesDeUnArray(numeros)

console.log(arrayDePares)