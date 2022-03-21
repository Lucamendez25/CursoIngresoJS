/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.


Julio y agosto = "hace frio"
septiembre a marzo = "Ya pasamos el frio, ahora calor!!!."
Abril a Junio = "Falta para el invierno."
*/

function mostrar()
{
	//tomo el mes
	let mesDelAño;
	let mensaje;

	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		case "Enero":
		case "Febrero":
		case "Marzo":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio."
			break;
		default:
			mensaje = "Falta para el invierno."	
			break;



	}

alert(mensaje)

}//FIN DE LA FUNCIÓN


//txtIdMes
