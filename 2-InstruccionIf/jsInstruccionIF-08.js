function mostrar()
{
	let EdadIngresada;
	let EstadoCivil;


	EdadIngresada = document.getElementById("txtIdEdad").value;
	EdadIngresada =parseInt(EdadIngresada);
	EstadoCivil = document.getElementById("estadoCivil").value;

//  menor a 18 YY un estado civil distinto a soltero
	if (EdadIngresada <18 && EstadoCivil != "Soltero")
	{
		
	}

	else
	
	{
		//si es mayor de edad YY soltero 	
		if (EdadIngresada >=18 && EstadoCivil=="Soltero")
		{
			alert("es soltero y no es menor");
		}
	}


}//FIN DE LA FUNCIÓN
/*txtIdEdad
estadoCivil*/