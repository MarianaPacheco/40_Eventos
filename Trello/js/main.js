function agregarTituloLista(){
	var contenedor = document.createElement("div");		/*Contenedor de la caja de texto y el botón de guardar*/
	contenedor.setAttribute('class', 'cont img-thumbnail');
	var cajaTexto = document.createElement("textarea");
	cajaTexto.setAttribute('autofocus', '');
	cajaTexto.setAttribute('placeholder', 'Añadir una lista...')
	var btnGuardar = document.createElement("button");
	btnGuardar.innerHTML = 'Guardar';
	btnGuardar.setAttribute('id', 'btnS');
	
	contenedor.appendChild(cajaTexto);	/*Incrusta caja de texto dentro del contenedor*/
	contenedor.appendChild(btnGuardar);	/*Incrusta el botón guardar dentro del contenedor*/
	
	divCrearLista.appendChild(contenedor);	/*Incrusta el contenedor dentro de divCrearLista*/

	quitaBtnAdd = document.getElementById('btn_add');	/*Remplaza el input por el div contenedor*/
	quitaBtnAdd.style.display = 'none';

	/*function agregarLista(){
		var title = document.createElement('h4');
		title.appendChild(document.createTextNode(cajaTexto.value));

	}
	var btnGuardar.getElementById('btnS');
	btnGuardar.onclick = agregarLista;*/
}

var btnAdd = document.getElementById('btn_add');
btnAdd.onclick =  agregarTituloLista;


//var btnSave = document.getElementById('btnGuardar')


/*var btnDelete = document.createElement('button'); 
btnDelete.innerHTML = 'Eliminar';
contenedor.appendChild(btnDelete);*/