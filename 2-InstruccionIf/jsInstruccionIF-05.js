function mostrar()
{
	let EdadIngresada

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);

	if(!(EdadIngresada >12 && EdadIngresada <19))

		{
		alert("usted es adolescente");
		}



}
//FIN DE LA FUNCIÓN