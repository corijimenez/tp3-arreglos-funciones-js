/*6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
Ejemplo:
Input:
lado A = 24
lado B = 5
Output: 58
 */

function perimetro(a, b){
    const p = 2 * (a + b)
    return p
}

const a = parseFloat(prompt('Ingrese el valor de un lado del rectangulo:'))
const b = parseFloat(prompt('Ingrese el valor del otro lado del rectangulo:'))

const resultado = perimetro(a,b)
document.writeln(`<p> El perimetro del rectangulo es: ${resultado}</p>`)