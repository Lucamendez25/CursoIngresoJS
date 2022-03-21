/*si es menor de 13 , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolescente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
*/
/*
function mostrar()
{
	let EdadIngresada;
	let msg

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EdadIngresada=parseInt(EdadIngresada);




		if (EdadIngresada <13)//A
		{
			msg = ("Feliz día");
		}	
		else
		{
			if(EdadIngresada<18)//B
			{
				msg = ("Usted es adolescente");
				{
				if(EdadIngresada==17)
					{
						msg = ("último año");
					}
				}
			}
			if(EdadIngresada>17)//C
			{
				msg=("Tienes edad de laburar");
				{
					if(EdadIngresada == 33)
					{
						msg = ("Tienes edad de laburar y tenes la misma edad que")+("igual que cristo");
					}
				}
			}
			if(EdadIngresada>59)
			{
				msg = ("A jubilarse");
				{
					if(EdadIngresada==88)
					{
						msg = ("Lindo número");
					}
				}	
			}	
		}

if(EdadIngresada%2==0)
	{
		msg=msg + (" y tu número es par");
	}		




alert(msg); 
}//FIN DE LA FUNCIÓN

*/

//txtIdEdad
//estadoCivil

/*
Ejercicio 07 BIS V2(Realizar en los archivos  del ejercicio 07 del IF)
además de los datos ya ingresados , solicitar el nombre .
si es menor de 13 , , mostrar el mensaje “feliz día”.
Si es adolescente el mensaje es “usted es adolexcente”)
si tiene 17 años además mostrar el mensaje “último año!!!”
Si es mayor de edad mostrar el mensaje “tienes edad de laburar”.
si tiene 33 años , además mostrar el mensaje “como cristo”
si tiene más de 60 años, además mostrar el mensaje “A jubilarse”.
si tiene 88, además mostrar el mensaje “lindo número''
si la edad es par , además mostrar , “sos par!!”.
si se llama ‘Violeta’ y es adolescente , sumar el mensaje ‘como un color!!’
si se llama ‘Ricardo’ y es un menor a 13 , sumar el mensaje ‘muy chiquito para ese nombre’
si se llama ‘Alfredo’ y esta para jubilarse , sumar el mensaje ‘como el de 	QUEEN’
*/

function mostrar()
{
	let EdadIngresada;
	let nombreMinúscula
	let nombreIngresado;
	let mensaje;
	let EstadoCivil

	EdadIngresada=document.getElementById("txtIdEdad").value;
	EstadoCivil = document.getElementById("estadoCivil").value;

	nombreIngresado = prompt ("Ingrese su nombre:"); 

	EdadIngresada=parseInt(EdadIngresada);

	nombreMinúscula = nombreIngresado.toLowerCase()

	if (EdadIngresada <13)
	{
		mensaje = "Feliz día";
	}
	if (nombreIngresado == "Ricardo") 
	{
		mensaje = mensaje + "Muy chiquito para ese nombre";
	}
	else
	{
		if(EdadIngresada>12  && EdadIngresada<18)//ya tome todos los numeros anteriores de 18 hasta 13
		{
			mensaje = "Usted es adolescente";

			if(EdadIngresada==17)
			{
				mensaje = mensaje+"último año";//
			}
			if(nombreIngresado == "Violeta")
			{
				mensaje = mensaje + " como el color";
			}
			if(EstadoCivil == "Divorciado")
			{
				mensaje = mensaje + " toda una vida por delante"
			}	
		}
		
		else // mayor a 18
		{
			{
			if(EdadIngresada>17)

			mensaje = "Tienes edad para laburar";

				if (EdadIngresada==33)
				{
				mensaje = mensaje + "como cristo";
				}
				if (EdadIngresada >60)
				{
				mensaje = mensaje + "A jubilarse";

				if (EdadIngresada == 88)
				{
					mensaje = mensaje + "Lindo número";
				}
				if (nombreIngresado == "Alfredo")
				{
					mensaje = mensaje + "Como el de Queen";
				}
			}
			



			}
			else
			{
				if (EstadoCivil == "Soltero")
				{
					mensaje = mensaje + "a salir";
				}
			}
		}
	}//cerre el if de edades

	if(EdadIngresada %2 == 0)
	{
		mensaje = mensaje + " y tu número es par";
	}

alert(mensaje);

}//fin de la función
	

/*NO TODO TIENE QUE SER IF ELSE, en este caso, por ejemplo
son excluyentes, por ende se utiliza mas If If */