/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los 
lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.
 */

let apariciones = new Array(13).fill(0); 

for (let i = 0; i < 50; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1
    const dado2 = Math.floor(Math.random() * 6) + 1

    const suma = dado1 + dado2
    apariciones[suma]++;
}

document.writeln(`<table class="table table-striped-columns">`)
document.writeln(`<table> <tr><th>Suma 🎲🎲</th><th>Apariciones</th></tr>`)

 for (let i = 2; i <= 12; i++) {
  document.writeln( `<tr><td>${i}</td><td>${apariciones[i]}</td></tr>`)
}

document.writeln(`</table>`)
 

