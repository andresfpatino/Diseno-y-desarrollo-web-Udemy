
// ----- Obtener elementos por Etiquetas
var etiquetas = document.getElementsByTagName('div');
	etiquetas[0].textContent = 'Cambio texto por etiqueta'; //Cambia texto textContent
	etiquetas[1].innerHTML = '<u>Insertando HTML</u>'; //Cambia texto innerHTML

// ----- Obtener elementos por Clases
var clase = document.getElementsByClassName('caja');

// ----- Obtener elementos por ID
var id = document.getElementById('primeraCaja');
	id.textContent = 'Cambio texto por ID';
	id.classList.add("mystyle"); // Agrega clase 

// ----- Creando Nodos desde el DOM
var creaCaja = document.createElement('div');
var creaContenidoCaja = document.createTextNode('Nodo creado desde el DOM');
creaCaja.appendChild(creaContenidoCaja) // appendChild incrusta dentro el contenido
creaCaja.setAttribute('class', 'caja'); // Agrega atributos a la caja

// Agrega el elementos al documento
// var contenedor = document.getElementById('contenedor'); 
// contenedor.appendChild(creaCaja);


// ----- Modificando la clase o ID de un elemento
creaCaja.id = 'desdeElDom';
creaCaja.className = 'caja naranja'

// Conocer el elemento padre con prentNode
var padre = etiquetas[0].parentNode;
// insertBefore: inserta el elemento en la posición indicada
padre.insertBefore(creaCaja, etiquetas[0] ); 

padre.replaceChild(creaCaja, etiquetas[2] ); // replaceChild reemplazar un elemento hijo

padre.removeChild(etiquetas[3])