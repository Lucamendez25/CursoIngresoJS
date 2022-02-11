function mostrar()
{
	let EdadIngresada

EdadIngresada=document.getElementById("txtIdEdad").value;
EdadIngresada=parseInt(EdadIngresada);
	
	//niego todo, para que sea lo contra
	if(!(EdadIngresada>12 && EdadIngresada <18))
	{
		alert("usted no es adolescente");
	}


}
//FIN DE LA FUNCIÓN
//txtIdEdad