/*Al ingresar una edad debemos informar
 si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). menor a  4 años es bebe, si tien 60 años o mas anciano*/


 function mostrar()
{
	let EdadIngresada;
	

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);


//usted es mayor de edad? 19
 	if(EdadIngresada>17)

	{
	alert("usted es mayor de edad"); 
	}

	
		else
		{ 
			
			if(EdadIngresada>12 && EdadIngresada <18)
			

				{
				alert("usted es adolescente");	
    			}
	
			else 
	
				{
    			alert("usted es un niño y feo");
    			}
		
		}
}




//FIN DE LA FUNCIÓN