function mostrar()
{
	//declaro variables
	let EdadIngresada;
	let EstadoCivil;


	EdadIngresada=document.getElementById("txtIdEdad").value;
	EstadoCivil=document.getElementById("estadoCivil").value;

	EdadIngresada=parseInt(EdadIngresada);


	if(EdadIngresada<18 && EstadoCivil!="Soltero")
	{
		alert("Es muy pequeño para no ser soltero");
	}


	
}//FIN DE LA FUNCIÓN
//txtIdEdad
//estadoCivil