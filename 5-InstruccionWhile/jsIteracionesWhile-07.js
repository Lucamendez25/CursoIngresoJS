
/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
/*function mostrar()
{	
	let numeroIngresado
	let contador;
	let acumulador;
	let respuesta;
	
	contador=0;
	acumulador=0;


	respuesta='si';

	

	while(respuesta == "si" ) 
	{
		numeroIngresado = prompt("Ponga un número");
		numeroIngresado = parseInt (numeroIngresado);

		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;

		respuesta = prompt("Quiere ingresar otro número");
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

	
	
	
	
	
	//txtIdSuma
	//txtIdPromedio

}//FIN DE LA FUNCIÓN

*/



///////////////////////////////////////////////////////////////////////////////////////



/*
Realizar el algoritmo que permita 
	el ingreso por prompt de
	1-alturas en centimetros	(validar entre 0 y 250) ,
	2-la edad (validar)
	3-temperatura(validar)
	4-el sexo(validar el sexo “f” o “m” o "nb")
	5-nota (validar)
	6-nombre
	de estudiantes de la UTN hasta que el usuario quiera,

1ERA PARTE
	informar :
	a)Cuántas mujeres hay .
	b)Cuántos con fiebre y cuantos sin fiebre.
	c)el promedio de edad por sexo.
	
2da PARTE
	informar :
	d)el primer alumno aprobado
	e)el nombre y edad la máxima temperatura 
	f)la altura y nota  del no binario mas joven

3ra PARTE
	informar :
	g)el nombre de la mujer más alta de las que aprobó
	h)el porcentaje de  personas que desaprobaron sobre el total
	i)el nombre del primer hombre, que mide menos de 160 cm y  está  desaprobado.

*/

function mostrar()
{
	let altura;
	let respuesta;
	let edad;
	let temperatura;
	let sexo;
	let nota;
	let nombre;

	let contadorFemenino;
	let contadorMasculino;
	let contadorNoBinario 

	let contadorFiebre;
	let contadorTemperatura;

	let acumuladorTemperatura;
	let acumuladorFiebre;
	
	let acumuladorEdadF;
	let acumuladorEdadM;
	let acumuladorEdadNb

	let promedioEdadF;
	let promedioEdadM;
	let promedioEdadNb;





	respuesta = "si";
	
	contadorFiebre = 0;
	contadorTemperatura = 0;


	contadorMasculino=0;
 	contadorNoBinario=0;
 	contadorFemenino = 0;



	acumuladorTemperatura = 0;
	acumuladorFiebre = 0;


	acumuladorEdadF=0;
	acumuladorEdadM=0;
	acumuladorEdadNb=0;


	promedioEdadF = 0;
	promedioEdadM = 0;
	promedioEdadNb = 0;



	while(respuesta == "si")
	{
		altura = prompt("Ingrese su altura:"); //ALTURA
		
		while(altura <0 || altura >250) 
		{
			altura = prompt("Error, ingrese una altura válida: ");
		}

		
		edad = prompt("Ingrese su edad: "); //EDAD
		edad = parseInt (edad);

		while(edad <0)
		{
			edad=prompt("Error, ingrese una edad válida: ");
		}

		
		temperatura = prompt("Ingrese su temperatura corporal (En °C): "); //GRADOS

		while (temperatura <25 || temperatura >50)
		{
			temperatura = prompt ("Error. ingrese una temperatura válida (entre 25 y 50)");
		}

		
		sexo = prompt ("Ingrese que sexo es con f (femenino), m(masculino) o nb(no binario):"); //SEXO

		while (sexo != "f" && sexo != "m" && sexo != "nb")
		{
			sexo = prompt ("Error, ingrese un sexo válido: ");
		}

		nota = prompt("Ingrese su nota, porfavor: ");
		nota = parseInt (nota);

		while(nota <0 || nota >10)
		{
			nota = prompt("Error, ingrese una nota válida: ");
			nota = parseInt(nota);
		}

		
		nombre = prompt("Ingrese su nombre: "); //NOMBRE


		if(sexo == "f")//CUANTAS MUJERES
		{
			contadorFemenino = contadorFemenino + 1;
			acumuladorEdadF = acumuladorEdadF + edad;
		}		
		
		else
		{
			if (sexo == "m")//CUANTAS HOMBRES
			{
				contadorMasculino = contadorMasculino + 1;
				acumuladorEdadM = acumuladorEdadM + edad;
			}
			else //CUANTOS NO BINARIOS
			{
				contadorNoBinario = contadorNoBinario + 1;
				acumuladorEdadNb = acumuladorEdadM + edad;
			}
		}

		

		if(temperatura >37) //LOS QUE TIENEN FIEBRE
		{
			contadorFiebre = contadorFiebre + 1;
		}
		else //LOS QUE NOOO TIENE FIEBRE
		{
			contadorTemperatura = contadorTemperatura + 1;
		}
		


		respuesta = prompt ("¿Quiere ingresar, además de usted otra persona?");
	
	}



	//PROMEDIO MUJERES
	
	promedioEdadF = acumuladorEdadF/contadorFemenino;  //promedio = acumuladorEdadF / ContadorFemenino //ACA VA ESTO, AFUERA DEL WHILE, porque ingreso, todas las personas, y ahi hace las cuentas.
	
	//PROMEDIO HOMBRES
		
	promedioEdadM = acumuladorEdadM/contadorMasculino;
		
	// PROMEDIO NO BINARIOS
		
	promedioEdadNb = acumuladorEdadNb/contadorNoBinario;
		
	


	document.write("Hay " + contadorFemenino + " mujeres.")
	document.write("<br> Hay con fiebre: " + contadorFiebre)
	document.write("<br> Hay sin fiebre: " + contadorTemperatura);
	document.write("<br> El promedio de femeninos es: " + promedioEdadF);
	document.write("<br> El promedio de masculinos es: " + promedioEdadM);
	document.write("<br> El promedio de NoBinarios es: " + promedioEdadNb);










	







	



}//FIN DE LA FUNCIÓN!!!!!!!!!!!!!!!!!!!!
