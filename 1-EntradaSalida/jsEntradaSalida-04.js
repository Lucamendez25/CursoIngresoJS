/*Ejercicio 2:
una pinturería solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 pedidos
cantidad de litros validar (mayor a 0).
precio por litro validar (no puede ser menor a 4000).
marca validar (tersuave, colorin, plavicon).
Color.
a) la cantidad de litros que se compró en total. //acumuladorLitrosTotal
b) de la compra más cara, mostrar su color y marca. //bandera
c)mostrar la cantidad total de importe por las ventas 
y si supera los 50000 mostrar un mensaje el siguiente
mensaje:” usted es un gran vendedor”.
 */ 


function mostrar()
{
	let litrosIngresados;
	let precioPorLitroIngresado;
	let marca;
	let color;


	let acumuladorLitros=0;
	let acumuladorPrecio=0;

	let banderaMaximaCompra=false;
	let maximaCompra=0;
	let maximaCompraColor=0;
	let maximaCompraMarca=0;


	let mensajeGranVendedor;

	let contadorVueltas = 0;



	while(contadorVueltas <0)
	{	
		litrosIngresados= prompt ("ingrese litros que quiere: ");
		litrosIngresados = parseInt(litrosIngresados);

		while(litrosIngresados <0 )
		{
			litrosIngresados= prompt ("Error, ingrese litros que quiere que sea valido: ");
			litrosIngresados = parseInt(litrosIngresados);
		}

		precioPorLitroIngresado = prompt("ingrese precio cantidad litros, no puede ser menos a 4000");
		precioPorLitroIngresado = parseInt(precioPorLitroIngresado);

		while(precioPorLitroIngresado <4000)
		{
			precioPorLitroIngresado = prompt("Error, ingrese precio cantidad litros, no puede ser menos a 4000");
			precioPorLitroIngresado = parseInt(precioPorLitroIngresado);
		}

		marca = prompt("Elegir marca (tersuave, colorin, plavicon).")
		while(marca != "tersuave" && marca != "colorin" && marca != "plavicon")
		{
			marca = prompt("Error, elegir marca válida(tersuave, colorin, plavicon).");
		}

		color = prompt("ingrese color: ");


		acumuladorLitros = acumuladorLitros + litrosIngresados;
		acumuladorPrecio = acumuladorPrecio + precioPorLitroIngresado;



		if(banderaMaximaCompra == false)
		{
			maximaCompra = precioPorLitroIngresado;
	 		maximaCompraColor=color;
	 		maximaCompraMarca=marca;
	 		banderaMaximaCompra = true;
		}
		else
		{
			if(precioPorLitroIngresado > maximaCompra)
			{
				maximaCompra = precioPorLitroIngresado;
	 			maximaCompraColor=color;
	 			maximaCompraMarca=marca;
			}
		}

		contadorVueltas = contadorVueltas + 1;
	} 

	





	document.write("la cantidad de litros que se compró en total." + acumuladorLitros);
	document.write("<br>la compra más cara es de "+ maximaCompra + " su color es" +maximaCompraColor +" y marca " + maximaCompraMarca);
	document.write("<br>la cantidad total de importe es de " + acumuladorPrecio);
	if(acumuladorPrecio > 50000)
	{
		document.write("<br>Usted es un gran vendedor");
	}



}//FIN DE LA FUNCION

/*
Comprobación: 
caso 1: 
litros:5000
precio cantidad litros:tersuave
marca:tersuave
color:lila

caso 2: //caso + caro
litros:25000
precio canitdaad litros:150000
marca:plavicon
color:blanco

caso 3:
litros:200
precio canitdaad litros:4000
marca:colorin
color:rojo

caso 4:
litros:6350
precio canitdaad litros:4500
marca:plavicon
color:verde

caso 5:
litros:9000
precio canitdaad litros:20000
marca:plavicon
color:amarillo


//45550 TOTAL LITROS
//193500 TOTAL IMPORTE

*/ 

