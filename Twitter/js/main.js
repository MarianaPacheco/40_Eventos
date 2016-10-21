function agregarLista(){

	var texto = document.getElementById("text").value;

		if (texto === "" || texto === null || texto.length < 4){
			alert("Campo obligatorio. Mínimo 40 caracteresy máximo 100."); 
		} else{

			var check = document.createElement("input");	/*Crea un elemento input de tipo checkbox*/ 
			check.type = "checkbox";
			var lista = document.createElement("li");		/*Crea un elemento lista */
			lista.appendChild(check);		/*Incrusta el elemto check después (a un lado) de la lista. En este caso pone el check a un lado de la viñeta de la lista pero la viñeta no se ve */
			lista.appendChild(document.createTextNode(texto)); 	/*Crea el texto que se insertó en el textarea a un lado del check*/
			document.body.appendChild(lista);	/*Incrusta la lista hasta abajo de lo último que hay en el body*/
			
			var eliminar = document.createElement("button");	/*La variable eliminar crea un botón*/
			var spanIcon = document.createElement("span");		/*La variable spanIcon crea un elemento span que es en donde va a ir el botón*/ 
			spanIcon.setAttribute("class", "fa fa-trash-o");	/*Al span se le el atributo de una clase de bootstrap que inserta la imagen del botecito de basura*/
			eliminar.appendChild(spanIcon);		/*Incrusta la imagen del botecito dentro del span*/
			lista.appendChild(eliminar);	/*Incrusta la imagen del botecito a un lado de lo que hay en lista*/

			document.body.appendChild(lista);			
		}
	    
	    function borrar (){
	    	lista.parentNode.removeChild(lista);
	    }
	    eliminar.onclick = borrar;

	    function tachar () {
	    	lista.parentNode.strike(lista);
	    }
		check.onclick = tachar;
}


/*if( $('.micheckbox').prop('checked') ) {
    alert('Seleccionado');
    Checa si esta seleccionado el checkbox
}*/






/*document.addEventListener("onclick", btn_agregar);

function btn_agregar() {
    document.getElementById("demo").innerHTML += "Moused over!<br>"
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>"
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>"
}
*/
