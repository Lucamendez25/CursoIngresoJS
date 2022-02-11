/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{


let importe;
let descuentoAlImporte;	
let importeConDescuento;


	importe=document.getElementById ("txtIdImporte").value;

	importe=parseInt(importe);


	descuentoAlImporte = importe*0.25;

	importeConDescuento = importe - descuentoAlImporte;

	document.getElementById ("txtIdResultado").value=importeConDescuento;

     
}

//txtIdImporte
//txtIdResultado

/*
10 bis 
lo anterior mas.
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento es 750"


/*
{

let importe;
let descuentoAlImporte;	
let importeConDescuento;
let porcentaje

//tomo el importe por id
importe=document.getElementById ("txtIdImporte").value;
porcentaje=prompt("Ingrese el descuento deseado: %");


//transformo a entero
importe=parseInt(importe);
porcentaje=parseInt(porcentaje);

descuentoAlImporte=importe*porcentaje/100;


importeConDescuento = importe - descuentoAlImporte;

document.getElementById ("txtIdResultado").value=importeConDescuento;

alert("el importe es de: "+importe+" la cantidad de descuento es "+descuentoAlImporte+" y el importe con el descuento es "+importeConDescuento);

}
*/