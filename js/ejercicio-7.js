/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 
al 10 del número elegido por el usuario.
 */



function tablaMultiplicar(nro) {
      
      document.writeln(`<table>`)
      document.writeln(`<tr><th colspan="2">Tabla del ${nro}</th></tr>`) 
      for (let i = 1; i <= 10; i++) {
        document.writeln(`<tr><td>${nro} x ${i}</td><td>${nro * i}</td></tr>`)
      }
      document.writeln(`</table>`)
      
    }
document.writeln(`<h3> Tabla de multiplicar </h3>`)
let nro = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar:"));
tablaMultiplicar(nro);