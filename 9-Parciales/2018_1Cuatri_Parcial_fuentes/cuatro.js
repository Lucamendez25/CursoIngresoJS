/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado,
muestro el mensaje "la suma es xxx y supero el 10".
*/


function mostrar()
{
	let numeroIngresadoUno;
	let numeroIngresadoDos;
	let cuentaRestar;
	let cuentaSumar;


	numeroIngresadoUno = prompt ("Ingrese primer número porfavor");
	numeroIngresadoDos = prompt ("Ingrese segundo número porfavor");

	numeroIngresadoUno = parseInt (numeroIngresadoUno);
	numeroIngresadoDos = parseInt (numeroIngresadoDos);

	if(numeroIngresadoUno == numeroIngresadoDos)
	{
		mensaje = ("El numero uno es " + numeroIngresadoUno + " el número dos es " +  numeroIngresadoDos);
	}	
	else
	{
		if (numeroIngresadoUno > numeroIngresadoDos)
		{
			cuentaRestar = numeroIngresadoUno - numeroIngresadoDos;
			mensaje = ("Se realizo la resta, el total es: " + cuentaRestar);
		}
		else
		{
			cuentaSumar = numeroIngresadoUno + numeroIngresadoDos;
			mensaje = ("Se realizo la suma, el total es "+ cuentaSumar);
		}
	}
	

	if(cuentaSumar > 10)
	{
		mensaje = ("La suma es " + cuentaSumar + " Y supero los 10");
	}

	alert(mensaje);
}
