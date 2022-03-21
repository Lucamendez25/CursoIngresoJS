/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/


function mostrar()
{
	let horaIngresada;
	let mensaje;


	horaIngresada = document.getElementById("txtIdHora").value;
	horaIngresada = parseInt(horaIngresada);

	switch(horaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			mensaje = "Es de mañana";
			break;

		default:
			mensaje = "Es otra hora del día";
			break;	
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN