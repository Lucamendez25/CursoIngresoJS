
/*SIMULACRO PARCIAL
Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/

function mostrar()
{	
	let origenIngresado;
	let cantidadVacunas;
	let costoVuelo;



	let acumuladorAsia=0;
	let acumuladorEuropa=0;
	let acumuladorAmerica=0; 
	let acumuladorVacunas=0;



	let mensajeOrigen;


	let totalSinDescuento=0;
	let descuento;
	let totalConDescuento;
	



	let respuesta="si";



	while(respuesta)
	{
		origenIngresado = prompt("Ingrese origen: ");

		while(origenIngresado != "asia" && origenIngresado != "europa" && origenIngresado != "america");
		{
			origenIngresado = prompt("Error, ingrese origen válido: ");
		}

		cantidadVacunas = prompt("Ingrese cantidad entre 500000 y 2500000: ");
		cantidadVacunas = parseInt (cantidadVacunas);

		while(cantidadVacunas <50000 || cantidadVacunas >2500000)
		{
			cantidadVacunas = prompt ("Error, ingrese una cantidad válida de vacunas: ");
			cantidadVacunas = parseInt (cantidadVacunas);
		}
		costoVuelo = prompt ("Ingrese costo de vuelo, entre 1 millon y 5 millones: ");
		costoVuelo = parseInt(costoVuelo);

		while(costoVuelo <1000000 || costoVuelo >5000000)
		{
			costoVuelo = prompt("Error, ingrese costo de vuelo, entre 1 millon y 5 millones: ");
			costoVuelo = parseInt(costoVuelo);
		}


		switch(origenIngresado)
		{
			case "asia":
				acumuladorAsia = acumuladorAsia + cantidadVacunas;
				break;



			case "europa":
				acumuladorEuropa = acumuladorEuropa + cantidadVacunas;
				break;


			default: 
				acumuladorAmerica = acumuladorAmerica + cantidadVacunas;
				break;
		}

		acumuladorVacunas= acumuladorVacunas + cantidadVacunas;
		totalSinDescuento = totalSinDescuento + costoVuelo;

		respuesta =prompt("¿Desea continuar?");
	}


	if(acumuladorAsia < acumuladorEuropa && acumuladorAsia < acumuladorAmerica)
	{
		mensajeOrigen = "America";
	}
	else
	{
		if(acumuladorEuropa < acumuladorAsia && acumuladorEuropa < acumuladorAmerica)
		{
			mensajeOrigen = "Europa";
		}
		else
		{
			mensajeOrigen = "Asia";
		}
	}


	if (acumuladorVacunas>10000000)
	{
		descuento = totalSinDescuento * 0.25;
	}
	else
	{
		if(acumuladorVacunas>5000000)
		{
			descuento = totalSinDescuento * 0.15;
		}
		else
		{
			descuento=0
		}
	}

	totalConDescuento = totalSinDescuento - descuento;





	document.write("Lugar donde se enviaron menos vacunas: " + mensajeOrigen);

	document.write("<br>El total sin descuentos a pagar por los gastos de los viajes: "+ totalSinDescuento);
	document.write("<br>El total con descuentos a pagar por los gastos de los viajes: "+ totalConDescuento);
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
















}//FIN DE LA FUNCION








