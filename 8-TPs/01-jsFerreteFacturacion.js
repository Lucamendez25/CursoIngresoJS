/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//declaro la variable de los precios, y el total
	let precioUno;
	let precioDos;
	let precioTres;
	let total;

	//buscamos la ID, y los guardo en las variables 

	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioTres=document.getElementById("txtIdPrecioTres").value;

	//parseo

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	//resultado de la suma de las tres partes:

	total = precioUno+precioDos+precioTres;

	alert("la suma de las partes es "+total);



	
}
function Promedio () 
{
    
    let precioUno;
	let precioDos;
	let precioTres;
	let total
	let promedio;


	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioTres=document.getElementById("txtIdPrecioTres").value;


	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	promedio=parseInt(promedio);

	
	total = precioUno+precioDos+precioTres;

    promedio = total/3;


	alert("El promedio de las partes es "+promedio);




}
function PrecioFinal () 
{

	let precioUno;
	let precioDos;
	let precioTres;
	let total;
	let iva;


	precioUno=document.getElementById("txtIdPrecioUno").value;
	precioDos=document.getElementById("txtIdPrecioDos").value;
	precioTres=document.getElementById("txtIdPrecioTres").value;


	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	iva=parseInt(iva);


	total = precioUno+precioDos+precioTres;

	//practicar de otra

    iva = total*1.21;


    alert("el precio total, con el iva incluido es: "+ iva);

}



//txtIdPrecioUno
//txtIdPrecioDos
//txtIdPrecioTres