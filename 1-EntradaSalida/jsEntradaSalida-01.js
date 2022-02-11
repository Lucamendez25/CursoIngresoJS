/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
Sabados: Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los 
precios y el precio final total más iva(21%), pedir un porcentaje de descuento 
y aplicarlo al precio final , mostrar todos los datos calculados e ingresados por alerta. 
(solo una alerta en el código). Los datos se piden por prompt
*/
function mostrar()
{
	let mensajeInstrucción;
	let precioUno;	
	let precioDos;
	let precioTres;
	let total;
	let iva;
	let porcentaje;
	let descuento;
	let descuentoAlPrecio;
	let precioConDescuento;




	alert ("Ingrese tres precios para saber su promedio, su total, y su total con IVA ");

	precioUno = prompt("Ingrese el precio Uno: ");
	precioUno= parseInt(precioUno);

	precioDos = prompt("Ingrese el precio Dos: ");
	precioDos= parseInt(precioDos);

	precioTres = prompt("Ingrese el precio Tres: ");
	precioTres= parseInt(precioTres);

    total=precioUno+precioDos+precioTres;

    promedio=total/3;

    iva = total*1.21;



alert("El total de todos los precios es: "+ total);
alert("El promedio de los tres precios anterior mencionados son: "+promedio);
alert("El precio con IVA incluido es: "+iva);


alert("Ahora, de este precio, coloque el descuento que le gustaria realizar...");

    porcentaje=prompt("Ingrese el descuento deseado: %");
	
	porcentaje=parseInt(porcentaje);
	descuento=parseInt(descuento);
	

	descuentoAlPrecio=(iva*porcentaje)/100;
	precioConDescuento=iva - descuentoAlPrecio;





alert("El precio final con su descuento sería un total de "+precioConDescuento);

}

