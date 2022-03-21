/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , 
edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")
y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos.
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , 
tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/

function mostrar()
{

	let nombreIngresado; 
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperaturaCorporalIngresado;



	let banderaNombrePersonaTemperaturaMaxima=false;
	let maximaTemperaturaCorporal;
	let maximoNombreTemperaturaCorporal;

	let contadorViudosMayoresDeEdad = 0;
	let contadorSolteros = 0;
	let contadorViudos = 0;
	let contadorTemperaturaYViejo = 0;

	let acumuladorSolteros = 0;
	let promedioSolteros;




	let respuesta = "si";

	while (respuesta == "si")
	{
		nombreIngresado = prompt("ingrese su nombre");
		
		edadIngresada = prompt ("ingrese su edad");//"10"
		edadIngresada = parseInt(edadIngresada); //10

		sexoIngresado = prompt("ingrese su sexo: (f o m)"); // f o m
		while(sexoIngresado != "m" && sexoIngresado != "f")//algo diferente a f o m
		{
			sexoIngresado = prompt("Error, ingrese su sexo: (f o m)");	//te tiro error, para que me pongas f o m

		}
		estadoCivilIngresado = prompt("ingrese su estado civil(soltero, casado o viudo)")
		
		while(estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo") 
		{
			estadoCivilIngresado = prompt("Error, ingrese su estado civil(soltero, casado o viudo)")
		}

		temperaturaCorporalIngresado = prompt("Ingrese su termperatura corporal")
		temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);
		
		while(temperaturaCorporalIngresado <32 || temperaturaCorporalIngresado > 50)
		{
			temperaturaCorporalIngresado = prompt("Error, ingrese su termperatura corporal (32° y 50°")
			temperaturaCorporalIngresado = parseInt(temperaturaCorporalIngresado);	
		}


		switch (estadoCivilIngresado)
		{
			case "viudo":
				contadorViudos ++;
				if(edadIngresada > 18)
				{
					contadorViudosMayoresDeEdad ++;
				}
				break;

			case "soltero":	
				acumuladorSolteros = acumuladorSolteros + edadIngresada
				contadorSolteros ++;
				break;
				
			default:
				break;		
		}

		if (edadIngresada >60 && temperaturaCorporalIngresado > 38)
		{
			contadorTemperaturaYViejo ++
		}

	

		if (banderaNombrePersonaTemperaturaMaxima == false)
		{	
			maximaTemperaturaCorporal = temperaturaCorporalIngresado;
			maximoNombreTemperaturaCorporal = nombreIngresado;
		}
		else
		{
			if(temperaturaCorporalIngresado > maximaTemperaturaCorporal)
			{
				maximaTemperaturaCorporal = temperaturaCorporalIngresado;
				maximoNombreTemperaturaCorporal = nombreIngresado;
			}
		}




		
		respuesta = prompt("quiere seguir ingresando: ") //no

	} 



	promedioSolteros = acumuladorSolteros / contadorSolteros;

	contadorSolterosYViudos = contadorSolteros + contadorViudos;


	document.write("El nombre de la persona con más temperatura es: " + maximoNombreTemperaturaCorporal);
	document.write("<br>La cantidad de personas viudas y mayores de edad son: " + contadorViudosMayoresDeEdad);
	document.write("<br>La cantidad de personas solteras o viudos: " + contadorSolterosYViudos);
	document.write("<br>La cantidad de personas mayores de edad, y que tienen mas de 38 grados de temperatura son: " + contadorTemperaturaYViejo);
	document.write("<br>El promedio de edades entre los solteros es de: " + promedioSolteros);

}//FIN DE LA FUNCION
