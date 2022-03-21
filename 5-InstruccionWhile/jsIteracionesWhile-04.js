/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado =parseInt(numeroIngresado)



	while(isNaN(numeroIngresado)||(numeroIngresado <0 || numeroIngresado>9))//IsNaN, si no es un número, va a ser verdadero, por ende entra al while
	{
		numeroIngresado = prompt("ingrese, por favor, un número entre 0 y 9.");
		numeroIngresado =parseInt(numeroIngresado)
	}

	document.getElementById("txtIdNumero").value=numeroIngresado
	
}//FIN DE LA FUNCIÓN