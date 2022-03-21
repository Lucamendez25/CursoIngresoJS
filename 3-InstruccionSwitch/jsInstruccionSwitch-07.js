/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	let destino
	let mensaje

	destino = document.getElementById("txtIdDestino").value;

	switch(destino)
	{
		case "Bariloche":
			mensaje = "Está en el Oeste";
			break;
		case "Cataratas":
			mensaje = "Está en el Norte";
			break;
		case "Mar del plata":
			mensaje = "Está en el Este";
			break;
		case "Ushuaia":
			mensaje = "Está en el Sur";
			break;
	}

alert(mensaje);
	

}//FIN DE LA FUNCIÓN
//txtIdDestino