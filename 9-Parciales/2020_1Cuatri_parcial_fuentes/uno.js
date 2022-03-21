/*
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/



/*CÓDIGO MATIAS


function mostrar()
{
	
	let contador;
	let tipo;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let minimoAlcohol;
	let banderaDelPrimero;
	let cantidadMinimaAlcohol;
	let fabricanteAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorePrecioJabon;
	let acumuladorePrecioBarbijo;
	let acumuladorePrecioAlcohol;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let promedio;




	contador=0;
	banderaDelPrimero= "es el primero";
	acumuladorJabon =0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorePrecioJabon=0;
	acumuladorePrecioBarbijo=0;
	acumuladorePrecioAlcohol=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;


	while(contador<5)
	{
		tipo = prompt("ingrese el tipo (barbijo, jabon o alcohol)");

		while(tipo != "barbijo" && tipo != "jabon"&& tipo !="alcohol")
		{
			tipo = prompt("error reingrese el tipo (barbijo, jabon o alcohol)");
		}

		precio = prompt("ingrese el precio entre 100 y 300");
		precio = parseInt(precio);

		while(precio <100 || precio >300)
		{
			precio = prompt("error reingrese el precio entre 100 y 300");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("error reingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("ingrese marca");

		fabricante = prompt("ingrese fabricante");

		if(tipo == "alcohol")
		{

			if(banderaDelPrimero ="es el primero" )
			{
			minimoAlcohol = precio;
			cantidadMinimaAlcohol= cantidadUnidades;
			fabricanteAlcohol = fabricante;
			banderaDelPrimero ="ya se cargo el primero";
			}
			else
			{

				if(minimoAlcohol > precio)
				{
					minimoAlcohol = precio;
					cantidadMinimaAlcohol= cantidadUnidades;
					fabricanteAlcohol = fabricante;
				}

			}
			
			acumuladorAlcohol = acumuladorAlcohol +cantidadUnidades;
			acumuladorePrecioAlcohol = acumuladorePrecioAlcohol + precio;
			contadorAlcohol=contadorAlcohol+1;
		}
		else
		{
			if(tipo == "jabon")
			{
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				acumuladorePrecioJabon = acumuladorePrecioJabon + precio;
				contadorJabon = contadorJabon+1;


			}
			else
			{
				acumuladorBarbijo = acumuladorBarbijo +cantidadUnidades;
				acumuladorePrecioBarbijo = acumuladorePrecioBarbijo + precio;
				contadorBarbijo=contadorBarbijo+1;

			}

		}




		contador=contador +1;
	}



	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{

		promedio = acumuladorePrecioAlcohol/contadorAlcohol; 

	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			promedio = acumuladorePrecioBarbijo/contadorBarbijo; 

		}

		else
		{
			promedio = acumuladorePrecioJabon/contadorJabon; 
		}


	}


document.write("Del más barato de los alcohol, la cantidad de unidades y el fabricante es "+cantidadMinimaAlcohol+" y su fabricante es " + fabricanteAlcohol);
document.write("<br>Del tipo con mas unidades, el promedio por compra es: "+promedio);
document.write("<br>Cuántas unidades de jabones hay en total es :"+acumuladorJabon);
}



*/
/* MI CODIGO (A CORREGIR);
function mostrar()
{	
	let contador;
	let tipo;
	let precio;
	let cantidadUnidades;
	let fabricante;
	let banderaDelPrimero;
	let minimoAlcohol;
	let cantidadMinimaAlcohol;
	let fabricanteAlcohol;
	let acumuladorAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorPrecioAlcohol;
	let acumuladorPrecioJabon;
	let acumuladorPrecioBarbijo;
	let contadorAlcohol;
	let contadorJabon;
	let contadorBarbijo;
	let promedio;
	


	contador = 0;
	banderaDelPrimero = "es el primero";
	acumuladorJabon = 0
	acumuladorBarbijo = 0
	acumuladorAlcohol = 0
	acumuladorPrecioJabon = 0
	acumuladorPrecioBarbijo = 0 
	acumuladorPrecioAlcohol = 0

	while (contador <5) 
	{
	 	tipo = prompt ("Ingrese el tipo que quiere (barbijo, jabón o alcohol): ");
	 

			while (tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol" )
			{
			 	tipo = prompt("Error, ingrese un tipo válido (barbijo, jabón o alcohol): ");
			}

		precio = prompt ("Ingrese el precio entre 100 y 300 pesos: ");
		precio = parseInt (precio);
	
			while (precio <100 || precio >300)
			{
				precio = prompt ("Error, ingrese un precio válido: ");
				precio = parseInt (precio);
			}


		cantidadUnidades = prompt ("Ingrese la cantidad de unidades que necesitas(no puede ser menor a 0, ni mayor a 1000");
		cantidadUnidades = parseInt (cantidadUnidades);

			while(cantidadUnidades <1 || cantidadUnidades>1000)
			{
				cantidadUnidades = prompt("Error, ingrese una cantidad de unidades válida: ");
				cantidadUnidades = parseInt (cantidadUnidades);
			}

		marca = prompt("Ingrese marca: ");

		fabricante = prompt ("Ingrese fabricante: "); 

		if(tipo == "alcohol")
		{

			if(banderaDelPrimero = "es el primero")
			{
				minimoAlcohol = precio;
				cantidadMinimaAlcohol = cantidadUnidades;
				fabricanteAlcohol = fabricante;
				banderaDelPrimero = "ya se cargo el primero";
			}

			else
			{
				if(minimoAlcohol > precio)
				{
					minimoAlcohol = precio;
					cantidadMinimaAlcohol = cantidadUnidades;
					fabricanteAlcohol = fabricante;
				}
			}

			acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
			acumuladorPrecioAlcohol = acumuladorPrecioAlcohol + precio;
			contadorAlcohol = contadorAlcohol + 1;
		}

		else
		{
			if(tipo == "jabon")
			{
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				acumuladorPrecioJabon = acumuladorPrecioJabon + precio;
				contadorJabon = contadorJabon + 1;
			}
			else
			{
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				acumuladorPrecioBarbijo = acumuladorPrecioBarbijo + precio;
				contadorBarbijo = contadorBarbijo + 1;
			}
		}	
		
		
		


		contador = contador + 1	
	}



	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = acumuladorPrecioAlcohol/contadorAlcohol;
	}

	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			promedio = acumuladorPrecioBarbijo/contadorBarbijo; 
		}
		else	
		{
			promedio = acumuladorPrecioJabon/contadorJabon;
		}
	}



document.write ("Del mas barato de los alcoholes, la cantidad de unidades y el fabricante es: " + cantidadMinimaAlcohol+ "y su fabricante es"+ fabricanteAlcohol);
document.write("<br> Del tipo con más unidades, el promedio por compra es: "+ promedio);
document.write("<br> Las unidades de jabónes que hay en total es: " + acumuladorJabon);



}//FIN DE LA FUNCIÓN*/

/*Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente: //MOSTRAR
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/ 
/*
function mostrar()
{
	let contadorVueltas = 0;
	let tipo;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;


	let banderaMinimoAlcohol=false;


	let minimoPrecioAlcohol;
	let minimaCantidadAlcohol;
	let minimoFabricanteAlcohol;

	let tipoMasUnidades;


	let acumuladorAlcohol = 0;
	let acumuladorBarbijo = 0;
	let acumuladorJabon = 0;

	let contadorAlcohol = 0;
	let contadorBarbijo = 0;
	let contadorJabon = 0;


	let promedioPorCompraMasUnidades;


	while (contadorVueltas <5)
	{
		tipo = prompt("Ingrese barbijo, jabón, o alcohol: ");

		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol" )
		{
			tipo = prompt("Error, ingrese barbijo, jabón, o alcohol: ");
		}

		precio = prompt ("Ingrese precio entre 100 y 300: ");
		precio = parseInt (precio);

		while (precio <100 || precio >300)
		{
			precio = prompt ("Error, ingrese precio entre 100 y 300: ");
			precio = parseInt (precio);
		}
		cantidadUnidades = prompt ("Ingrese cantidad de unidades");
		cantidadUnidades = parseInt (cantidadUnidades);

		while (cantidadUnidades <0 || cantidadUnidades>1000)
		{
			cantidadUnidades = prompt ("Error, ingrese cantidad de unidades entre 0 a 1000");
			cantidadUnidades = parseInt (cantidadUnidades);
		}

		marca = prompt ("Ingrese marca:");
		fabricante = prompt ("Ingrese fabricante");


		switch(tipo)
		{
			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidadUnidades;
				contadorAlcohol = contadorAlcohol + 1;

				if(banderaMinimoAlcohol == false)
				{
					minimoPrecioAlcohol = precio;
					minimaCantidadAlcohol = cantidadUnidades;
					minimoFabricanteAlcohol = fabricante;
					banderaMinimoAlcohol = true;
				}
				else
				{
					if(precio < minimoPrecioAlcohol)
					{
						minimoPrecioAlcohol = precio;
						minimaCantidadAlcohol = cantidadUnidades;
						minimoFabricanteAlcohol = fabricante;
					}
				}
				break;
			
			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidadUnidades;
				contadorBarbijo = contadorBarbijo + 1;
				break;

			default:
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				contadorJabon = contadorJabon + 1;
				break;	
		}

		contadorVueltas = contadorVueltas + 1;	
	}


	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		tipoMasUnidades = "alcohol";
		promedioPorCompraMasUnidades = acumuladorAlcohol/contadorAlcohol;
	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			tipoMasUnidades = "barbijo";
			promedioPorCompraMasUnidades = acumuladorBarbijo/contadorBarbijo;
		}
		else
		{
			tipoMasUnidades = "jabón";
			promedioPorCompraMasUnidades = acumuladorJabon/contadorJabon;
		}
	}

		


	document.write("El más barato de los alcoholes: "+minimoPrecioAlcohol+" la cantidad de unidades es "+minimaCantidadAlcohol+ " y el fabricante es "+ minimoFabricanteAlcohol)
	document.write("<br>El tipo con más unidades es " + tipoMasUnidades + " el promedio por compra es de " + promedioPorCompraMasUnidades);
	document.write("<br>La cantidad total de jabones que hay es de: " + acumuladorJabon);
}//FIN DE LA FUNCIÓN*/ 


/*
Ejemplo 1: 
barbijo
200
1000
Barbijoncios
AleXX

Ejemplo 2:
jabon
100
100
Jabonciños
Luca

Ejemplo 3:
alcohol
300
450
Los Etililicos
LucasC

Ejemplo 4:
alcohol
250
900
Absolut Vodka
Shankies

Ejemplo 5: 
barbijo
100
1000
Cubreboquitas
Muteados


*/ 

/*
Ejercicio 1
Una reconocida empresa de desarrollo nos contratara para realizar un nuevo proyecto, necesitamos crear un
software para el Hospital Garrahan que nos pide recopilar la información del ingreso de niños en la semana, para eso
debemos tomar los siguientes datos:
- El nombre del niño:
- El turno de ingreso (validar: mañana, tarde y noche).
- Temperatura corporal con la que ingresa en ºC (validar que este entre 37 a 41 inclusive).
- Edad (entre 0 y 15 años inclusive).
Debemos informar:
a) La cantidad total de niños que ingresaron en la semana.
b) De los tres turnos debemos informar cual fue el turno que mayor cantidad de niños menores de 12 años
recibió.
c) El nombre del niño con más temperatura en la semana.
*/ 
function mostrar()
{
	let respuesta = "si";
	let nombreIngresado;
	let turnoIngresado;
	let temperaturaIngresada;
	let edadIngresada;




	while(respuesta== "si")
	{
		nombreIngresado = prompt("Ingrese su nombre: ");
		turnoIngresado = prompt("Ingrese turno: mañana, tarde o noche");

		while(turnoIngresado != "mañana" && turnoIngresado != "tarde" && turnoIngresado != "noche")
		{
			turnoIngresado = prompt("Error, ingrese turno: mañana, tarde o noche");
		}
		
		temperaturaIngresada = prompt ("Ingrese temperatura entre 37 a 41:");
		temperaturaIngresada = parseInt (temperaturaIngresada);

		while(temperaturaIngresada <37 || temperaturaIngresada >41)
		{
			temperaturaIngresada = prompt ("Error, ingrese temperatura entre 37 a 41:");
			temperaturaIngresada = parseInt (temperaturaIngresada);
		}

		edadIngresada = prompt ("Ingrese edad: ");
		edadIngresada = parseInt (edadIngresada);

		while(edadIngresada <0 || edadIngresada >15)
		{
			edadIngresada = prompt ("Error, ingrese edad: ");
			edadIngresada = parseInt (edadIngresada);
		}

		switch(turnoIngresado)
		
		{
			case "mañana":
				break;
			case "tarde":
				break;
			default:
				break;		
		}







	}







}//FIN DE LA FUNCION;




