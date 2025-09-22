/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como
 resultado una cadena de texto que indica si el número es par o impar.
  Mostrar por pantalla el resultado devuelto por la función.
 */

function esParOImpar(nro){
    if (nro % 2 === 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

const numero = parseInt(prompt('Ingrese un número entero:'))
const resultado = esParOImpar(numero)
document.writeln(`<p> El resultado es ${resultado}</p>`)