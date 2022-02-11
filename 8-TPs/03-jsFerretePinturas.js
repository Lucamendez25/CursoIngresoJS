/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados ()
{
	let Fahrenheit
	let Centigrados
	let temperatura
	

    temperatura = document.getElementById ("txtIdTemperatura").value;
    temperatura =parseInt (temperatura);


  	centigrados = (temperatura-32)*5/9;


  	alert("de Fahrenheit a centigrados es "+centigrados);

}

function CentigradosFahrenheit () 
{

	let Fahrenheit
	let Centigrados
	let temperatura


	temperatura = document.getElementById ("txtIdTemperatura").value;
	temperatura =parseInt(temperatura);
	
	Fahrenheit = (temperatura* 9/5) + 32;


	alert("de centigrados a Fahrenheit es "+Fahrenheit);
}

//txtIdTemperatura
