function mostrar()
{
	//tomo el mes

	let mesDelAño
	let mensaje

	mesDelAño=document.getElementById("txtIdMes").value;

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = ("que comiences bien el año!!!.");
			break;

		case "Marzo":
			mensaje = ("a clases!!!.");
			break;	

		case "Julio":
			mensaje = ("se vienen las vacaciones");
			break;

		case "Diciembre":
			mensaje = ("Felices fiestas!!!!");
			break;

		default: 
			mensaje = "no hay eventos en este mes";
			break;	

	}
	
alert (mensaje)

	}//FIN DE LA FUNCIÓN


//switch: compara numeros enteros -- caracteres -- cadena
//no olvidear de parsear, es importante
//solo puedo preguntar una cosa
/*
switch(letra)
{
	case: "a":
		alert("es a");
		break;

	case "e":
		alert("es e");
		break;

	case "i":
		alert("es i");
		break;

	case "o":
		alert ("es o");
		break;

	case "u":
		alert ("es u");
		break;

	default:
		alert ("es otra cosa");
		break;	


}
*/
