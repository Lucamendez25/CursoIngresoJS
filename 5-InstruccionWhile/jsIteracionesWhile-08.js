/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		

		if(numeroIngresado >0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		if(numeroIngresado <0)
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		respuesta = prompt ("¿Quiere ingresar otro número?"); //ponerlo siempre abajo, antes de que termine el while
	}


	document.getElementById("txtIdSuma").value = sumaPositivos
	document.getElementById("txtIdProducto").value = multiplicacionNegativos




}
//FIN DE LA FUNCIÓN
	//txtIdSuma
	//txtIdProducto