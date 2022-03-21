/*
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
*/ 

function mostrar()
{
	let universidadIngresada;
	let nombreIngresado;
	let apellidoIngresado;
	let edadIngresada;

	let banderaProfeDios=false;
	let profeDios;
	let mensajeDios;
	

	let mensajeMatiEsteban;

	let respuesta = "si";



	while(respuesta == "si")
	{
		universidadIngresada = prompt("¿Usted es profesor de la Unversidad Tecnológica Nacional (UTN) ?");
		universidadIngresada = universidadIngresada.toLowerCase();

		while (universidadIngresada != "si")
		{
			universidadIngresada = alert("Si no eres profesor de la Utn, invito a retirarse porque no entendera las referencias...");
			universidadIngresada = prompt("Si eres en verdad profesor de la Utn, y te confundiste, pon (si) para poder continuar. ");
			universidadIngresada = universidadIngresada.toLowerCase();
		}

		nombreIngresado = prompt ("Ingrese su nombre, por favor: ");
		nombreIngresado = nombreIngresado.toLowerCase();
		
		apellidoIngresado = prompt("Ingrese su apellido, por favor: ");
		apellidoIngresado = apellidoIngresado.toLowerCase();

		edadIngresada = prompt ("Ingrese su edad: ");
		edadIngresada = parseInt(edadIngresada);

		while(edadIngresada <0)
		{
			edadIngresada = prompt("La edad ingresada no es válida nene/a, de 0 al infinito, nada de negativos, te pedi edad nomás... ");
			edadIngresada = parseInt(edadIngresada);
		}

		switch (nombreIngresado)
		{
			case "matias":
				mensajeMatiEsteban = "Mensaje oculto no desbloqueado 1/2";		
				break;

			case "esteban":
				mensajeMatiEsteban = "Mensaje oculto no desbloqueado 1/2";
				break;

			default: 
				mensajeMatiEsteban = "Mensaje oculto no desbloqueado 0/2";	
		}	

	 respuesta = prompt("Quiere ingresar un profesor más");
	}


		if (nombreIngresado == "matias" && nombreIngresado == "esteban")
		{
			mensajeMatiEsteban = "Gracias por todo, a los dos"
		}


		if(banderaProfeDios == false && nombreIngresado == "octavio")
		{
			profeDios = nombreIngresado;
			mensajeDios = "Excelente este pochoclo...";
		}
		else
		{
			mensajeDios = "Mensaje oculto no desbloqueado";
		}
		 
	document.write(mensajeMatiEsteban);
	document.write("<br>" + mensajeDios);



}//FIN DE LA FUNCION

