/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

 */
const ciudades = []
let ciudad

do {
    ciudad = prompt('Ingrese el nombre de una ciudad (Cancelar para finalizar):');
    if (ciudad) {
        ciudades.push(ciudad)
    }   
} while (ciudad)

/*mostrar ciudades*/

document.writeln(`<h3>Ciudades ingresadas:</h3>`)
document.writeln(`<ul class="list-group">`)
for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li class="list-group-item">${ciudades[i]}</li>`)
}
document.writeln(`</ul>`)

/*mostrar datos */
document.writeln(`<p>Longitud del arreglo: ${ciudades.length}</p>`)
document.writeln(`<p>Primera ciudad: ${ciudades[0]}</p>`)
document.writeln(`<p>Tercera ciudad: ${ciudades[2]}</p>`)
document.writeln(`<p>Última ciudad: ${ciudades[ciudades.length - 1]}</p>`)
document.writeln(`<p>Ciudad en la segunda posición: ${ciudades[1]}</p>`)

/*agregar paris y cambiar el ultimo por barcelona*/
ciudades.push('París')
if (ciudades.length > 1) {
    ciudades[1] = 'Barcelona';
}   

/*mostrar ciudades actualizadas*/
document.writeln(`<h3>Ciudades actualizadas:</h3>`);
document.writeln(`<ul class="list-group">`);
for (let i = 0; i < ciudades.length; i++) {
    document.writeln(`<li class="list-group-item">${ciudades[i]}</li>`);
}   
document.writeln(`</ul>`);
