/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	//declaro la variable de los precios, y el total

	let largo
	let ancho
	let total
	let alambreX3
	
	//buscamos la ID, y los guardo en las variables 

   largo = document.getElementById ("txtIdLargo").value;
   ancho = document.getElementById ("txtIdAncho").value;

   //parseo


	largo=parseInt(largo);
	ancho=parseInt(ancho);
	total=parseInt(total);
	alambreX3=parseInt(alambreX3);
	

	//el total, es igual a largo + ancho

	total=largo+ancho;

//y en este caso, lo multiplico por 3, porque tengo que poner 3 alambres a su alrededor.
	alambreX3=total*3;



	alert("el total que hay que comprar de alambre es "+alambreX3);


}
function Circulo () 
{	
	let area
	let radio;
	let diametro;
    let total;

//solo parseo los datos que me da el usurio

	radio=document.getElementById("txtIdRadio").value;
	radio=parseInt(radio);
	
//estos no los parseo    
    diametro=2*3.14*radio


    total=diametro*3;




    alert("la cantidad a comprar de alambre es "+ total);



	
}
function Materiales () 
{
	let largo
	let ancho
	let total 
	let contrapiso
	let base
	let cal 
	let cemento



	largo = document.getElementById ("txtIdLargo").value;
	ancho = document.getElementById ("txtIdAncho").value;


	largo=parseInt(largo);
	ancho=parseInt(ancho);

	contrapiso = largo*ancho;
    base = contrapiso*2;
    
    
    cemento = base*2;
    cal = base*3;


    alert("la cantida de bolsas que necesitas de cal es "+cal+" y la cantidad de bolsas de cemento es "+cemento);




	
}

//txtIdLargo
//txtIdAncho
//txtIdRadio