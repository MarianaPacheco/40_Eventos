function validateText(){

var texto = document.getElementById("text")value;

if (texto === "" || texto === null || texto.length < 40){
		var mensaje = document.createElement("span");
		//span.setAttribute("class", "error");
		mensaje.innerHTML = "Campo obligatorio. Mínimo 40 caracteres.";
		document.getElementById("text")[0].appendChild(mensaje); 
	}
} else if (texto.legth > 100){
	var mensaje = document.createElement("span");
	//span.setAttribute("class", "error");
	mensaje.innerHTML = "Máximo 100 caracteres.";
	document.getElementById("text")[0].appendChild(mensaje); 
} else {
	var check = document.createElement("li");
	check.innerHTML = texto.value;
}



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
