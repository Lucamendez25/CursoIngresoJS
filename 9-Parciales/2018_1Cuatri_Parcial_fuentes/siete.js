/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10), 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:

a) El promedio de las notas totales.

b) La nota más baja y el sexo de esa persona.

c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function mostrar()
{
	//Declaro variables

	let notaIngresada;
	let contadorIngresoAlumnos = 0;
	let sexoIngresado;
	let promedioNotas=0;


	let acumuladorNotas=0;
	

	let notaMinima=0;
	let sexoNotaMinima; 

	let banderaNota = false

	let notaMayorSeis =0;
	let contadorVaronesAprobados=0;
	



	//Parseo
	
	



	//While de vuelta 5 veces, necesito un contador.
	while (contadorIngresoAlumnos < 5)
	{
		//Prompt notas, si ingresa otra que no sea entre 0 y 10, error, ingrese valido.
		notaIngresada = prompt("Ingrese su nota (0 al 10");
		notaIngresada = parseInt (notaIngresada);

		while(notaIngresada <0 || notaIngresada >10)
		{
			notaIngresada = prompt ("Error, ingrese una nota valida");
		}
		// pregunto por sexo 
		sexoIngresado = prompt("ingrese su sexo: f o m");

		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt ("Error, ingrese un sexo válido");
		}


		contadorIngresoAlumnos = contadorIngresoAlumnos + 1;
		acumuladorNotas = acumuladorNotas + notaIngresada;


		if(banderaNota == false)
		{
			notaMinima = notaIngresada;
			sexoNotaMinima = sexoIngresado;

			banderaNota = true
		}
		else
		{
			if(notaIngresada < notaMinima)
			{
			notaMinima = notaIngresada;
			sexoNotaMinima = sexoIngresado;
			}
		}

		if(sexoIngresado == "m" && notaIngresada > 5)
		{
			notaMayorSeis = notaIngresada;
			contadorVaronesAprobados = contadorVaronesAprobados + 1;
		}


		


	}

	promedioNotas = acumuladorNotas / 5;



	document.write("El promedio de todas las notas es: " + promedioNotas);
	document.write("<br> La nota más baja es " + notaMinima +  " y el sexo de esa persona es: " + sexoNotaMinima);
	document.write("<br> La cantidad de notas de varones que sacaron 6 o más: " + contadorVaronesAprobados);


	

	

	


	//promedio notas totales, contador de todas la notas y diividirla por 5

	//Entre esas 5, la nota más baja.

	// contador masculinos, que hayan sacado mas de 5.








}//FIN DE LA FUNCIÓN
