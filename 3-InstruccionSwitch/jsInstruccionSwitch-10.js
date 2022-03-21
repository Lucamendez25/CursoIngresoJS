/*
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche
*/



function mostrar()
{
	let estación;
	let destino;
	let mensaje;


	estación = document.getElementById ("txtIdEstacion").value;
	destino = document.getElementById ("txtIdDestino").value;

	switch (estación)
	{
		case "Invierno":
			switch(destino)
			{
				case "Bariloche":
					mensaje ="Se viaja";
					break;

				default:
					mensaje = "No se viaja";
					break;				
			}

		break; //corto estación
		case "Verano":
			switch (destino)
			{
				case "Cataratas":
				case "Mar del plata":
					mensaje = "Se viaja";
					break;

				default:
					mensaje = "No se viaja";
					break;	
			}

		break;//corto estación
		case "Otoño":
			switch (destino)
			{
				default:
					mensaje = "A todos lados se viaja";
					break;
			}

		break;//corto estación	
		case "Primavera":
			switch(destino)
			{
				case "Bariloche":
					mensaje = "No se viaja";
					break;

				default:
					mensaje = "Se viaja";
					break;	
			}
	} 


alert(mensaje);




}//FIN DE LA FUNCIÓN
//txtIdEstacion
//txtIdDestino

// Estaciones : Invierno Verano Otoño Primavera
//Destinos : Bariloche Cataratas Mar del plata Cordoba