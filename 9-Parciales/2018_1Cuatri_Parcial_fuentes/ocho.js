/*
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos:
 una letra y un número entre -100 y 100 
 (validar) hasta que el usuario quiera e 
 informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.
*/


function mostrar()
{
	let letraIngresada;
	let numeroIngresado;
	

	//contadores
	let contadorNumerosPares=0;
	let contadorNumerosImpares=0;
	let contadorCeros=0;
	let contadorPositivos=0;

	//acumuladores
	let acumuladorPositivos=0;
	let acumuladorNegativos=0;


	//promedios
	let promedioNumerosPositivos=0;



	//banderas
	let banderaMaximo=false;
	let banderaMinimo=false;



	let numeroMaximo 
	let numeroMinimo 
	let letraNumeroMaximo
	let letraNumeroMinimo



	let respuesta = "si";



	while (respuesta == "si")

	{

	letraIngresada = prompt("Ingrese una letra: ")
	
	numeroIngresado = prompt ("ingrese un número entre -100 y 100")
	numeroIngresado = parseInt (numeroIngresado);

		while(numeroIngresado <-100 || numeroIngresado >100 || isNaN(numeroIngresado)) 
		{
			numeroIngresado = prompt ("Error, ingrese un numero entre -100 y 100");
			numeroIngresado = parseInt (numeroIngresado);
		}

		if(numeroIngresado == 0)
		{
			contadorCeros = contadorCeros+1;
		}
		else
		{
			if(numeroIngresado %2 == 0)
			{
				contadorNumerosPares = contadorNumerosPares + 1;
			}
			else
			{
				contadorNumerosImpares = contadorNumerosPares + 1;
			}
		}
	

		
		if(numeroIngresado>0)//PROMEDIO
		{
			contadorPositivos = contadorPositivos +1;
			acumuladorPositivos = numeroIngresado;
		}
		else
		{
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}


		if(banderaMaximo == false)
		{
			numeroMaximo = numeroIngresado;
			letraNumeroMaximo = letraIngresada
			banderaMaximo = true
		}
		else
		{
			if(numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
				letraNumeroMaximo = letraIngresada
			}
		}



		if(banderaMinimo == false)
		{
			numeroMinimo = numeroIngresado;
			letraNumeroMinimo=letraIngresada;
			banderaMinimo = true;
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
				letraNumeroMinimo=letraIngresada;
			}
		}

		respuesta = prompt("desea continuar");
	}

	




	promedioNumerosPositivos = acumuladorPositivos/contadorPositivos;	



document.write("La cantidad de números pares es: " + contadorNumerosPares);
document.write("<br>La cantidad de números impares es: " + contadorNumerosImpares);
document.write("<br>La cantidad de ceros es: " + contadorCeros);
document.write("<br>El promedio de todos los números positivos es: "+ promedioNumerosPositivos);
document.write("<br>La suma de todos los números negativos es: "+ acumuladorNegativos);
document.write("<br>El número máximo es: " + numeroMaximo + "y su letra es: " + letraNumeroMaximo);
document.write("<br>El número mínimo es: " + numeroMinimo+ "y su letra es: " + letraNumeroMinimo);




}

