/*
Ejercicio 1:
el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez, diaz))
nombre del paciente.
a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años. 
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad.
c)el doctor que más pacientes tuvo, sacar el promedio de edades.
*/


function mostrar()
{	
	
	let vacunasIngresadas;
	let edadIngresada;
	let doctorIngresada;
	let nombreIngresado;


	let contadorPacientesNoVacunas60=0
	let contadorPacientes=0;

	let promedio;

	let acumuladorEdades=0;
	
	let contadorPerez=0;
	let contadorLopez=0;
	let contadorDiaz = 0;

	let acumuladorEdadesPacientesPerez=0;
	let acumuladorEdadesPacientesLopez=0;
	let acumuladorEdadesPacientesDiaz=0;


	let minimoPacienteNombre;
	let minimoPacienteEdad;


	let banderaMinimoPaciente=false;

	let respuesta = "si"
	let mensajeMasPacientes;

	while(respuesta == "si")
	{
		
		nombreIngresado=prompt("ingrese su nombre:");

		edadIngresada = prompt("ingrese una edad: ");
		edadIngresada = parseInt(edadIngresada);
		
		while(edadIngresada <0 || edadIngresada >150)
		{
			edadIngresada = prompt("Error, ingrese una edad válida: ");
			edadIngresada = parseInt(edadIngresada);
		}

		vacunasIngresadas=prompt("ingrese cuantas dosis tiene(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)")
		vacunasIngresadas = parseInt (vacunasIngresadas);
		
		while(vacunasIngresadas>3)
		{
			vacunasIngresadas=prompt("Error, ingrese cuantas dosis tiene que sea válido(0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)")
			vacunasIngresadas = parseInt (vacunasIngresadas);
		}


		doctorIngresada = prompt("ingrese doctor (perez, lopez, diaz:" );
		doctorIngresada = doctorIngresada.toLocaleLowerCase();
		
		while(doctorIngresada != "perez" && doctorIngresada != "lopez" && doctorIngresada != "diaz")
		{
			doctorIngresada = prompt("Error, ingrese doctor (perez, lopez, diaz:" );
		}

		if((vacunasIngresadas == 0) && (edadIngresada >60))
		{
			contadorPacientesNoVacunas60 = contadorPacientesNoVacunas60 + 1;
		}


		if((banderaMinimoPaciente == false) && (vacunasIngresadas != 0))
		{
			minimoPacienteNombre = nombreIngresado;
			minimoPacienteEdad = edadIngresada;
			banderaMinimoPaciente = true;
		}
		else
		{
			if(edadIngresada < minimoPacienteEdad)
			{
				minimoPacienteNombre = nombreIngresado;
				minimoPacienteEdad = edadIngresada;
			}
		}


		switch(doctorIngresada)
		{

			case "perez":
				contadorPerez = contadorPerez + 1;
				acumuladorEdadesPacientesPerez = acumuladorEdadesPacientesPerez + edadIngresada;
				break;


			case "lopez":
				contadorLopez = contadorLopez + 1;
				acumuladorEdadesPacientesLopez = acumuladorEdadesPacientesLopez + edadIngresada;
				break;


			default: 
				contadorDiaz = contadorDiaz + 1;
				acumuladorEdadesPacientesDiaz = acumuladorEdadesPacientesDiaz + edadIngresada ;
				break;


		}


		contadorPacientes = contadorPacientes + 1;
		acumuladorEdades = acumuladorEdades + edadIngresada;

		respuesta = prompt("quiere seguir ingresando datos?");

	}



	if(contadorPerez > contadorLopez && contadorPerez > contadorDiaz)
	{	
		mensajeMasPacientes = "Peréz";
		promedio = acumuladorEdadesPacientesPerez/contadorPerez;
	}
	else
	{
		if(contadorLopez > contadorDiaz) //No hace falta poner Perez, porque ya preguntaste arriba si era el mayor.
		{
			mensajeMasPacientes = "López";
			promedio = acumuladorEdadesPacientesLopez/contadorLopez;
		}
		else
		{
			mensajeMasPacientes = "Diaz";
			promedio = acumuladorEdadesPacientesDiaz / contadorDiaz;
		}
	
	}
	





	
	document.write("La cantidad de pacientes que no tengan vacunas y sean mayor a 60 años, son un total de: " + contadorPacientesNoVacunas60)
	document.write("<br>el menor paciente que tenga 1 dosis o más, su nombre y su edad: " + minimoPacienteNombre + " y su edad es: " + minimoPacienteEdad)
	document.write("<br>el doctor que más pacientes tuvo es: " + mensajeMasPacientes);
	document.write("<br>El promedio de edades es " + promedio + promedio+promedio);
	
}//FIN DE LA FUNCION
