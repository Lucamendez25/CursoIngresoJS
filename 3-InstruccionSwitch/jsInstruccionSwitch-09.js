/*
una agencia de viajes debe sacar las tarifas de los viajes, 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso 
de una estacion del año y localidad para vacacionar para poder 
calcular el precio final.


en Invierno: bariloche tiene un aumento del 20%, cataratas y
 Cordoba tiene un descuento del 10%, Mar del plata tiene un 
 descuento del 20%.

en Verano: bariloche tiene un descuento del 20%, cataratas y 
Cordoba tiene un aumento del 10%, Mar del plata tiene un aumento 
del 20%.

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas 
tiene un aumento del 10% Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento.





15000 por cada viaje.


*/

function mostrar()
{
	let estación;
	let destino;
	let precioBase;
	let precioConPorcentaje;
	let descuentoAumento;
	let porcentaje;
	let precioFinal


	destino = document.getElementById("txtIdDestino").value;
	estación = document.getElementById("txtIdEstacion").value;


	precioBase = 15000;
	

	switch (destino)
	{
		case "Bariloche":
			switch(estación)
			{
				case "Invierno":
					porcentaje = 20;
					
					break;

				case "Verano":
					porcentaje = -20;
					
					break;

				default:	
					porcentaje = 10;
					
					break;
			} 

		break;	

		case "Mar del plata":
			switch (estación)
			{
				case "Invierno":
					porcentaje = -20;
					
					break;

				case "Verano":
					porcentaje = 20;
					break;

				default:	
					porcentaje = 10;
					break;
			}

		break;

		default:
			switch (estación)
			{
				case "Invierno":
					porcentaje = -10;					
					break;

				case "Verano":
					porcentaje = 10;
					break;

				default: //mensaje = undefined	
					porcentaje = 10;
					break;
			}

		break;			
	}

descuentoAumento = precioBase * porcentaje/100;
	precioFinal = precioBase + descuentoAumento;

mensaje = "Su precio final es: " + precioFinal;
alert(mensaje);







}//FIN DE LA FUNCIÓN

//txtIdEstacion
//txtIdDestino
/*
		Bariloche 
		Cataratas 
		Mar del plata 
		Cordoba
		Invierno 
		Verano 
		Otoño 
		Primavera
	
*/


