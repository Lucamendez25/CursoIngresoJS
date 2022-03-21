/*

Ejercicio 3:
una agencia de viajes nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. Nombre, cantidad de días (validar que nos sea negativo ni 0),
precio por día (validar entre 1000 y 3000), lugar al que viajan (validar Córdoba, Mendoza, Entre ríos).
a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
b) el importe total que recaudo Córdoba.

c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos.

*/
/* 

function mostrar()
{
    let nombreIngresado;
    let cantidadDias;
    let precioPorDia;
    let lugar;


    let acumuladorImporteMendoza=0;
    let acumuladorImporteCordoba=0;
   


    let contadorMendoza=0;
    let contadorEntreRios=0;


    let promedioImporteTotalMendoza=0;




    let mensaje = "si";

    while(mensaje=="si")
    {
        nombreIngresado = prompt("ingrese su nombre: ");


        cantidadDias = prompt("ingrese cantidad de dias que quiere: ");
        cantidadDias = parseInt(cantidadDias);

        while(cantidadDias <0)
        {
            cantidadDias = prompt("Error, ingrese cantidad de dias que quiere: ");
        	cantidadDias = parseInt(cantidadDias);
        }

        precioPorDia=prompt("Ingrese precio (entre 1000 y 3000")
        precioPorDia=parseInt(precioPorDia);

        while(precioPorDia <1000 || precioPorDia >3000)
        {
            precioPorDia=prompt("Error, ingrese precio (entre 1000 y 3000")
            precioPorDia=parseInt(precioPorDia);
        }

        lugar = prompt("Lugar al que quieran viajar (Córdoba, Mendoza, Entre ríos)")

        while(lugar != "cordoba" && lugar != "mendoza" && lugar != "entre rios") 
        {
            lugar = prompt("Error, lugar al que quieran viajar (Córdoba, Mendoza, Entre ríos)")
        }


        switch(lugar)
        {
            case "mendoza": 
                acumuladorImporteMendoza = acumuladorImporteMendoza + precioPorDia; 
                contadorMendoza = contadorMendoza+1;
                break;

            case "cordoba":
                acumuladorImporteCordoba = acumuladorImporteCordoba + precioPorDia;
                break;

            default:
                if(cantidadDias>15)
                {
                    contadorEntreRios = contadorEntreRios + 1;
                } 
                break;

        }







        mensaje = prompt("Quiere seguir ingresando?")
    }

    promedioImporteTotalMendoza = acumuladorImporteMendoza/contadorMendoza;



    document.write("Las personas que viajaron a Mendoza se recaudo en promedio: " + promedioImporteTotalMendoza + " por persona.");
    document.write("<br>El importe total que recaudo Córdoba fue de: " + acumuladorImporteCordoba);
    document.write("<br>La cantidad de personas que fueron a Entre Rios, más de 15 dias fueron: " + contadorEntreRios);



}//FIN DE LA FUNCION
*/


/*
Realizar el desarrollo de una plataforma web que permita organizar recorridos para 
recoletar aceites en restaurantes.El ingreso sera hasta que el usuario quiera. 

La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos: //USUARIO
	Zonas(CABA-BuenosAires-GBA)
	Nombre de Choferes
	Edad del chofer(mayor a 18 años)
	Clientes(McDonalds-Rodicio-SigaALaVaca)
	CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio
*/

function mostrar()
{
let zonas;
let nombreDeChofer;
let edadChofer;
let clientes;
let cantidadAceite;

let contadorCaba = 0;
let contadorBuenosAires = 0;
let contadorGba = 0;


let banderaChoferJoven = false;
let banderaAceiteRodicio = false;

let minimoNombreChoferMasJoven;
let minimoEdadChoferMasJoven;

let maximoCantidadAceiteRodicio;



let mensajeZonaMasVisitada; 




let respuesta = "si"

	while(respuesta == "si")
	{
		zonas = prompt("Ingrese una zona válida (CABA-Buenos Aires-GBA");
		while(zonas != "caba" && zonas != "buenos aires" && zonas != "gba")
		{
			zonas=prompt("Error, ingrese una zona válida (CABA-Buenos Aires-GBA");
		}

		nombreDeChofer = prompt("Ingrese nombre de chofer");

		edadChofer = prompt ("Ingrese edad de chofer (mayor a 18 años): ");
		edadChofer = parseInt(edadChofer);

		while(edadChofer <18)
		{
			edadChofer = prompt ("Error, ingrese edad de chofer (mayor a 18 años): ");
			edadChofer = parseInt(edadChofer);
		}

		clientes = prompt ("Ingrese cliente (McDonalds-Rodicio-SigaALaVaca)")

		while (clientes != "mcdonalds" && clientes != "rodicio" && clientes != "sigalavaca" )
		{
			clientes = prompt ("Error ingrese cliente (McDonalds-Rodicio-SigaALaVaca)");
		}
		
		cantidadAceite = prompt("Ingrese cantidad de aceite (entre 800 y 1500)")
		cantidadAceite = parseInt (cantidadAceite)
		
		while (cantidadAceite <800 || cantidadAceite >1500)
		{
			cantidadAceite = prompt("ERROR, Ingrese cantidad de aceite (entre 800 y 1500)")
			cantidadAceite = parseInt (cantidadAceite)
		}


		switch(zonas)
		{
			case "caba":	
				contadorCaba = contadorCaba + 1;
				break;

			case "buenos aires":
				contadorBuenosAires = contadorBuenosAires + 1;
				break;

			default:
				contadorGba = contadorGba + 1;
				break;

		}


		if(banderaChoferJoven == false )
		{
			minimoEdadChoferMasJoven = edadChofer;
			minimoNombreChoferMasJoven = nombreDeChofer;
			banderaChoferJoven = true;
		}
		else
		{
			if(edadChofer < minimoEdadChoferMasJoven)
			{
				minimoEdadChoferMasJoven = edadChofer;
				minimoNombreChoferMasJoven = nombreDeChofer;
			}
		}


		if(banderaAceiteRodicio == false && clientes == "rodicio")
		{
			maximoCantidadAceiteRodicio = cantidadAceite;
			banderaAceiteRodicio = true;
		}
		else
		{
			if(clientes == "rodicio" && cantidadAceite > maximoCantidadAceiteRodicio)
			{
				maximoCantidadAceiteRodicio = cantidadAceite;
			}
		}
		respuesta = prompt ("Quiere seguir ingresando?");
	}





	if (contadorCaba > contadorBuenosAires && contadorCaba > contadorGba)
	{
		mensajeZonaMasVisitada = "Caba";
	}
	else
	{
		if(contadorBuenosAires > contadorGba)
		{
			mensajeZonaMasVisitada = "Buenos Aires";
		}
		else
		{
			mensajeZonaMasVisitada = "Gba";
		}
	}

















	document.write ("La zona más visita es: " + mensajeZonaMasVisitada);
	document.write("<br>El nombre del chofer más joven es: "+ minimoNombreChoferMasJoven);
	document.write("<br>La mayor cantidad de aceite recolectada en Rodicio " + maximoCantidadAceiteRodicio);
	

}

