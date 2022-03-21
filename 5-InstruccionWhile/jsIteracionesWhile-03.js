/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave correcta.");

	while( claveIngresada != "utn750") 
	
	{
		claveIngresada = prompt("Error, ingrese el número clave correcta.");
	}

	alert("ingresaste la contraseña correcta");

	
}//FIN DE LA FUNCIÓN
