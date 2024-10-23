Descripción Ejercicio 1
Este ejercicio consiste en un script que analiza una página web con dos párrafos y cuenta los enlaces presentes, así como proporciona información sobre ellos. 

Estructura del Código HTML
El documento HTML contiene:

Estructura básica: Define el título y la configuración para dispositivos móviles.
Contenido:
Un párrafo (<p>) que contiene múltiples enlaces a YouTube.
Otro párrafo que incluye enlaces a Facebook e Instagram.
JavaScript
El script realiza las siguientes acciones:

Calcular el número total de enlaces:

const elements = document.querySelectorAll("a");
console.log(elements.length);
Selecciona todos los elementos <a> en la página y muestra el total en la consola.
Retornar la dirección del último enlace:

const endLink = elements[elements.length - 1].href;
console.log(endLink);
Obtiene el href del último enlace y lo imprime en la consola.
Calcular el número de enlaces en el primer párrafo:

const firstParagraph = document.getElementById("primerEnlace");
const linkFirstParagraph = firstParagraph.querySelectorAll("a");
const total = linkFirstParagraph.length;
console.log(total);
Selecciona el primer párrafo y cuenta cuántos enlaces hay en él, mostrando el resultado en la consola.

