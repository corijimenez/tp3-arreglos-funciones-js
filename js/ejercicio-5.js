/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está 
formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */

function tipoDeCadena(cadena){
    if (cadena === cadena.toUpperCase()) {
        return 'mayusculas'
    } else if (cadena === cadena.toLowerCase()) {
        return 'minusculas'
    } else {
        return 'una mezcla de mayusculas y minusculas'
    }
}
const texto = prompt('Ingrese un texto:')
const resultado = tipoDeCadena(texto)
document.writeln(`<p> La cadena "${texto}" está formada por ${resultado}.</p>`)