/*
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	let destino

	destino = document.getElementById ("txtIdDestino").value;

	switch (destino)

	{	
		case "Mar del plata":
		case "Cataratas":
			mensaje = "Hace Calor";
			break;
		default:
			mensaje = "Hace Frio";
			break;		
		
		
	}

alert(mensaje);		

}//FIN DE LA FUNCIÓN
//txtIdDestino