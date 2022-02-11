/*function mostrar()
{

	let EdadIngresada;

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);


if(EdadIngresada>=18)//verdadero o falso
//if(EdadIngresada>17) es lo mismo. Y hasta es mejor esta opción porque Optimiza el performance (será más rápido)	
	
	{
	alert("usted es mayor de edad");
	}
	
	
	//tomo la edad  
}

//FIN DE LA FUNCIÓN

//txtIdEdad


/* Si la persona (el número ingresado) es mayor o igual a 18*/


//2 bis:

/*function mostrar()
{

	let EdadIngresada;
	let EdadIngresada2

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);


	if(!(EdadIngresada>=18)) //lo niego
	
	{
	alert("usted no es mayor de edad");
	}
	
	else
	{
	alert ("usted es mayor de edad");
	}

	//tomo la edad  

}
*/


function mostrar()
{

	let EdadIngresada;
	let EdadIngresada2;
	let NombrePrompt;
	let Matias;
	let Esteban;

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);


	if (EdadIngresada >= 18)
	
	{
	alert("Creo que puedes ser Mati...");
	alert("o creo que puedes ser Esteban...");	
	alert("Perdón, no soy el akinator.");
	alert("Podrias decirme por favor, ¿Quién de los dos eres?");
	}

NombrePrompt=prompt("¿Esteban o Mati?");
NombrePrompt.toLowerCase();

if (NombrePrompt == "Esteban") 

	{
	alert("FELIZ CUMPLE ESTEBAN/MARCE TE QUEREMOS MUCHO, GRACIAS POR EXPLICARNOS CON TU HERMOSA PACIENCIA!!!!!!!!!!!!");
	}

    else
	{
	alert("MATI, NO ES TU CUMPLE PERO TE QUEREMOS IGUAL!!!!!");
	alert("o no...");	
	alert("JODAAAAAAAAAA, sos ALTO PROFE, GRACIAS POR TODO TAMBIÉN UWU");
	}

}	

