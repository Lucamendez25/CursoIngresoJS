/*
Se necesita el ingreso urgente de 5 donadores de sangre:
Tipo de sangre (A, B, O).
edad (mayor a 17 años).
cantidad de mililitros (mayor a 300 y menor a 600).
nombre dador.
a) cuantos mililitros de sangre se consiguió en total.
b) el mayor paciente, mostrar su nombre y tipo de sangre.
c) el tipo de sangre que más se consiguió.
*/ 

/*
function mostrar()
{
	let edadIngresada;
	let tipoSangreIngresada;
	let cantidadMililitrosIngresada;
	let nombreIngresado;

	let acumuladorSangreA = 0;
	let acumuladorSangreB = 0;
	let acumuladorSangreO = 0;
	let totalSangre;


	let banderaEdadMayorPaciente = false;
	let maximoEdadPaciente;
	let maximoNombrePaciente


	let maximoSangre;




	
	let contadorVueltas = 0;


	while(contadorVueltas <5)
	{

		tipoSangreIngresada = prompt ("Ingresar tipo de sangre (A, B, O)");

								
		while (tipoSangreIngresada != "A" && tipoSangreIngresada != "B" && tipoSangreIngresada != "O" ) 
		{
			tipoSangreIngresada = prompt("Error, ingresar tipo de sangre (A, B, O)");
		}

		edadIngresada = prompt ("Ingrese edad (mayor a 17 años)");
		edadIngresada = parseInt(edadIngresada);

		while (edadIngresada <18) //falso
		{
			edadIngresada = prompt ("Error, ingrese edad (mayor a 17 años)");
		}

		cantidadMililitrosIngresada = prompt ("Ingrese cantidad de mililitros (mayor a 300 y menor a 600)");
		cantidadMililitrosIngresada = parseInt (cantidadMililitrosIngresada);

		while(cantidadMililitrosIngresada <300 || cantidadMililitrosIngresada >600 )
		{
			cantidadMililitrosIngresada = prompt ("Error, ingrese cantidad de mililitros (mayor a 300 y menor a 600)");
			cantidadMililitrosIngresada = parseInt (cantidadMililitrosIngresada);
		}
		nombreIngresado = prompt ("Ingrese nombre:");

		switch(tipoSangreIngresada)
		{
			case "A":
				acumuladorSangreA = acumuladorSangreA + cantidadMililitrosIngresada;
				break;
			case "B":
				acumuladorSangreB = acumuladorSangreB + cantidadMililitrosIngresada;
				break;
			default:
				acumuladorSangreO = acumuladorSangreO + cantidadMililitrosIngresada;
				break;		
		}


		if (banderaEdadMayorPaciente == false)
		{
			maximoEdadPaciente = edadIngresada;
			maximoNombrePaciente = nombreIngresado;
			banderaEdadMayorPaciente = true;
		}
		else
		{
			if(edadIngresada > maximoEdadPaciente)
			{
				maximoEdadPaciente = edadIngresada;
				maximoNombrePaciente = nombreIngresado;
			}
		}

		contadorVueltas = contadorVueltas + 1;
	}


	totalSangre = acumuladorSangreA + acumuladorSangreB + acumuladorSangreO;


	if (acumuladorSangreA > acumuladorSangreB && acumuladorSangreA > acumuladorSangreO)
	{
		maximoSangre = "A";
	}
	else
	{
		if(acumuladorSangreB > acumuladorSangreO)
		{
			maximoSangre = "B";
		}
		else
		{
			maximoSangre = "O";
		}
	}
	
	
	document.write ("En total se consiguió: " + totalSangre + "mililitros de sangre");
	document.write ("<br>El mayor paciente que ingreso tenía " + maximoEdadPaciente + " y su nombre es " + maximoNombrePaciente);
	document.write ("<br>El tipo de sangre que más se consiguió fue el del " + maximoSangre);

}//FIN DE LA FUNCIÓN
*/

/*
caso 1
a
19
450
Ian

caso 2 
O
25
600
Luca

caso 3
B 
70
550
Serafin


caso 4
A
50
300
Irina

caso 5
A
22
300
Pipi



*/ 

/*
Ejercicio 2:
Una fabrica de pastas nos pide un programa para llevar control de sus productos, se ingresará pastas
hasta que el usuario quiera.
Nombre de la pasta.
Peso en gramos (que sea mayor a 100).
Tipo (con relleno, sin relleno).
Precio (mayor a 0).
a) el menor de los pesos de las pastas sin relleno.
b) el mayor de los pesos de las pastas con relleno.
c) cantidad total que se recaudó.
*/
/*
function mostrar()
{

let nombrePasta;	
let pesoPasta;
let tipoPasta;
let precioPasta;


let banderaMinimoPastaSinRelleno = false;
let minimoPesoPasta;


let banderaMaximoPastaConRelleno = false;
let maximoPesoPasta;


let acumuladorTotalPrecioPasta;



let bandera


let respuesta = "si";

	while(respuesta == "si")
	{
		nombrePasta = prompt ("Nombre de la pasta: ");
		 
		pesoPasta = prompt("Cuanto quiere de pasta? (Peso en gramos, que sea mayor a 100).");
		pesoPasta = parseInt (pesoPasta);

		while (pesoPasta <100)
		{
			pesoPasta = prompt("Error, cuanto quiere de pasta? (Peso en gramos, que sea mayor a 100).");
			pesoPasta = parseInt (pesoPasta);
		}
		
		tipoPasta = prompt("Tipo (con relleno, sin relleno).");
		tipoPasta = tipoPasta.toLowerCase();

		while (tipoPasta != "con" && tipoPasta != "sin" )
		{
			tipoPasta = prompt("Error, tipo (con relleno, sin relleno).");
			tipoPasta = tipoPasta.toLowerCase();
		}

		precioPasta = prompt("Precio de la pasta");
		precioPasta = parseInt (precioPasta);

		while (precioPasta <0)
		{
			precioPasta = prompt("Error, precio de la pasta");
			precioPasta = parseInt (precioPasta);
		}



		if (banderaMinimoPastaSinRelleno == false && tipoPasta == "sin" )
		{
			minimoPesoPasta = pesoPasta;
			banderaMinimoPastaSinRelleno = true;
		}
		else
		{
			if(tipoPasta == "sin" && pesoPasta < minimoPesoPasta)
			{
				minimoPesoPasta = pesoPasta;
			}
		}
	

		if (banderaMaximoPastaConRelleno == false && tipoPasta == "con")
		{	
			
			maximoPesoPasta = pesoPasta;
			banderaMaximoPastaConRelleno = true;
		}
		else
		{
			if(tipoPasta == "con" && pesoPasta > maximoPesoPasta)
			{
				maximoPesoPasta = pesoPasta;
			}
		}


		acumuladorTotalPrecioPasta = acumuladorTotalPrecioPasta + precioPasta;



		respuesta = prompt("Quiere seguir ingresando?")

	}//FIN DEL WHILE

	document.write ("El peso minimo de las pasta sin relleno es de " + minimoPesoPasta + " gramos");
	document.write ("<br>El peso maximo de las pastas con relleno es de " + maximoPesoPasta + " gramos");
	document.write ("<br>Lo que se recaudo en total fue de " + acumuladorTotalPrecioPasta);



}//FIN DE LA FUNCION
*/

/*
Ejercicio 3:
una agencia de viajes nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera.
Cantidad de cuotas (12,24.36).
Precio (mayor a 10000).
Cantidad de personas (mayor a 0 y menor a 9).
Temporada (otoño, invierno, primavera, verano).
a) el promedio de personas que viajaron en otoño y en invierno.

b) en verano cuantas veces se saco un pasaje que fueron 24 cuotas o más.
c)cuanto se recaudó en primavera.
*/  

function mostrar()
{

	let cuotasIngresadas;
	let precioIngresado;
	let cantidadPersonasIngresadas;
	let temporadaIngresada;

	let acumuladorOtoño;
	let acumuladorInvierno;




	let respuesta = "si";

	


	while(respuesta == "si")
	{

		cuotasIngresadas = prompt ("Cantidad de cuotas (12,24.36).");
		cuotasIngresadas = parseInt (cuotasIngresadas);

		while (cuotasIngresadas != 12 && cuotasIngresadas != 24 && cuotasIngresadas != 36)
		{	
			cuotasIngresadas = prompt ("Error, cantidad de cuotas (12,24.36).");
			cuotasIngresadas = parseInt (cuotasIngresadas);
		}

		precioIngresado = prompt ("Precio (mayor a 10000)");
		precioIngresado = parseInt (precioIngresado);

		while (precioIngresado <10001)
		{	
			precioIngresado = prompt ("Error, precio (mayor a 10000)");
			precioIngresado = parseInt (precioIngresado);
		}


		cantidadPersonasIngresadas = prompt ("Cantidad de personas (mayor a 0 y menor a 9).");
		cantidadPersonasIngresadas = parseInt (cantidadPersonasIngresadas);
		
		while (cantidadPersonasIngresadas <0 || cantidadPersonasIngresadas > 9)
		{
			cantidadPersonasIngresadas = prompt ("Error, cantidad de personas (mayor a 0 y menor a 9).");
			cantidadPersonasIngresadas = parseInt (cantidadPersonasIngresadas);
		}

		temporadaIngresada = prompt("Temporada (otoño, invierno, primavera, verano).");
		temporadaIngresada = temporadaIngresada.toLowerCase();

		while (temporadaIngresada != "otoño" && temporadaIngresada != "invierno" && temporadaIngresada != "primavera" && temporadaIngresada !="verano")
		{
			temporadaIngresada = prompt("Error, temporada (otoño, invierno, primavera, verano).");
			temporadaIngresada = temporadaIngresada.toLowerCase();
		}


		switch (temporadaIngresada)
		{
			case "otoño":
				acumuladorOtoño = acumuladorOtoño + cantidadPersonasIngresadas;
				break;
			case "invierno":
				acumuladorInvierno = acumuladorInvierno + cantidadPersonasIngresadas;
				break;
			case "primavera":
				break;	
			default:
				break;			

		}//FIN DEL SWITCH
		
		






		respuesta = prompt ("Quiere seguir ingresando? ")
	} //FIN DEL WHILE









}//FIN DE LA FUNCION
