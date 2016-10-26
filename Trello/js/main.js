var cajaTexto = document.createElement("input");
cajaTexto.setAttribute('autofocus', '');
cajaTexto.setAttribute('placeholder', 'Añadir una lista...');
var btnGuardar = document.createElement("button");
btnGuardar.innerHTML = 'Guardar';
btnGuardar.setAttribute('id', 'btnS');

function agregarTituloLista(){
	var contenedor = document.createElement("div");		/*Contenedor de la caja de texto y el botón de guardar*/
	contenedor.setAttribute('class', 'cont img-thumbnail');
	
	contenedor.appendChild(cajaTexto);	/*Incrusta caja de texto dentro del contenedor*/
	contenedor.appendChild(btnGuardar);	/*Incrusta el botón guardar dentro del contenedor*/
	
	divCrearLista.appendChild(contenedor);	/*Incrusta el contenedor dentro de divCrearLista*/

	quitaBtnAdd = document.getElementById('btn_add');	/*Remplaza el input por el div contenedor*/
	quitaBtnAdd.style.display = 'none';

}

var btnAdd = document.getElementById('btn_add');
btnAdd.onclick =  agregarTituloLista;


function agregarLista(){	/*Crea un div que va a contener la lista*/
	var div_lista = document.createElement("div");
	div_lista.setAttribute('class', 'divLista img-thumbnail');
	var title = document.createElement('h4');	/*Lo que se introduce en la textarea pasa como un titulo*/
	title.appendChild(document.createTextNode(cajaTexto.value));
	div_lista.appendChild(title);
	document.body.appendChild(div_lista);
	var linkAñadir = document.createElement("a");
	linkAñadir.innerHTML = "Añadir tarjeta...";
	div_lista.appendChild(linkAñadir);

	function agregarTarjeta(){	
		var divTarjeta = document.createElement("div");		
		divTarjeta.setAttribute('class', 'divTarj img-thumbnail');
		var textoTarjeta = document.createElement("input");
		textoTarjeta.setAttribute('autofocus', '');
		textoTarjeta.setAttribute('class', 'img-thumbnail');
		divTarjeta.appendChild(textoTarjeta);
		div_lista.appendChild(divTarjeta);
		var btnAñadir = document.createElement("button");
		btnAñadir.innerHTML = "Añadir";
		divTarjeta.appendChild(btnAñadir);
		linkAñadir.parentNode.replaceChild(divTarjeta, linkAñadir);
	}
	linkAñadir.onclick = agregarTarjeta;
}
btnGuardar.onclick = agregarLista;



//var btnSave = document.getElementById('btnGuardar')


/*var btnDelete = document.createElement('button'); 
btnDelete.innerHTML = 'Eliminar';
contenedor.appendChild(btnDelete);*/