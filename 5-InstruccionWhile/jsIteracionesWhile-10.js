/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let cantidadCeros;
	let cantidadPositivos;
	let cantidadNegativos;
	let promedioPositivos;
	let promedioNegativos;



	sumaPositivos = 0;
	sumaNegativos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;



	respuesta="si";

	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}//fin del while

	

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN