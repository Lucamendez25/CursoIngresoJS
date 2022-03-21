/*Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/

function mostrar()
{
	let planetaIngresado;
	let sol;
	let mercurio;
	let venus;
	let tierra;
	let marte;
	let jupiter;
	let saturno;
	let urano;
	let neptuno;
	let mensaje;

planetaIngresado = prompt ("Ingrese un planeta del sistema solar, porfavor: ");



	switch (planetaIngresado)
	{
		case "tierra":
			mensaje = "Acá vivimos!!!";
			break;

		case "mercurio":
		case "venus":
			mensaje = "Acá hace más calor";
			break;	

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":	
			mensaje = "Acá hace mas frio";
			break;

		default:
			mensaje = "ingrese un planeta válido.";
			break;	
		
	}

	alert(mensaje);
	









}//FIN DE LA FUNCIÓN
