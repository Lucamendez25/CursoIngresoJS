/*
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
*/
function mostrar()
{
	let precioIngresado;
	let porcentaje;
	let descuento;
	let precioFinal;


	precioIngresado = prompt ("Ingrese el precio: ");
	porcentaje = prompt ("Ingrese el porcentaje de descuento que desee:");

	precioIngresado = parseInt(precioIngresado);
	porcentaje = parseInt(porcentaje);


	descuento = precioIngresado * porcentaje/100;
	precioFinal = precioIngresado - descuento;


	document.getElementById ("elPrecioFinal").value = precioFinal;



}//FIN DE LA FUNCIÓN 

//elPrecioFinal
