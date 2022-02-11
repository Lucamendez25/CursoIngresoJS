function mostrar()
{
	let EdadIngresada;
	let EstadoCivil;


EdadIngresada = document.getElementById("txtIdEdad").value;
EdadIngresada = parseInt(EdadIngresada);
EstadoCivil = document.getElementById("estadoCivil").value;

	if(EdadIngresada <18 && EstadoCivil != "Soltero")
		{
		alert("usted es muy chico para no estar soltero");	
		}

	

}//FIN DE LA FUNCIÓN