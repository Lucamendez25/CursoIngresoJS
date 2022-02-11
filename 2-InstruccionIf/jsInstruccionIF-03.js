function mostrar()
{
	let EdadIngresada;
	

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);

 

	if(EdadIngresada>=18)
	
	{
	alert("usted es mayor de edad");
	}

	
	else
	
	{
	alert("usted es menor de edad");	
	}


}//FIN DE LA FUNCIÓN