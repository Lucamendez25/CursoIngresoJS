/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
Sabados: Se piden tres nombre de producto, y los precios de cada producto ingresado, 
sacar el precio bruto(la suma de los tres sin impuestos), el promedio de los 
precios y el precio final total más iva(21%), pedir un porcentaje de descuento 
y aplicarlo al precio final , mostrar todos los datos calculados e ingresados por alerta. 
(solo una alerta en el código). Los datos se piden por prompt
*/
/*function mostrar()
{
	let mensajeInstrucción;
	let precioUno;	
	let precioDos;
	let precioTres;
	let total;
	let iva;
	let porcentaje;
	let descuento;
	let descuentoAlPrecio;
	let precioConDescuento;




	alert ("Ingrese tres precios para saber su promedio, su total, y su total con IVA ");

	precioUno = prompt("Ingrese el precio Uno: ");
	precioUno= parseInt(precioUno);

	precioDos = prompt("Ingrese el precio Dos: ");
	precioDos= parseInt(precioDos);

	precioTres = prompt("Ingrese el precio Tres: ");
	precioTres= parseInt(precioTres);

    total=precioUno+precioDos+precioTres;

    promedio=total/3;

    iva = total*1.21;



alert("El total de todos los precios es: "+ total);
alert("El promedio de los tres precios anterior mencionados son: "+promedio);
alert("El precio con IVA incluido es: "+iva);


alert("Ahora, de este precio, coloque el descuento que le gustaria realizar...");

    porcentaje=prompt("Ingrese el descuento deseado: %");
	
	porcentaje=parseInt(porcentaje);
	descuento=parseInt(descuento);
	

	descuentoAlPrecio=(iva*porcentaje)/100;
	precioConDescuento=iva - descuentoAlPrecio;





alert("El precio final con su descuento sería un total de "+precioConDescuento);

}

/*


SIMULACRO PARCIAL


1. Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.*/ 


function mostrar()
{
	let respuesta;
	let productosVendidos;
	let vendedor;
	let tipo;
	let importeVenta;
	let acumuladorVentas;
	let porcentaje;
	let comision;
	let acumuladorVentaPerfume;
	let acumuladorVentaShampoo;
	let acumuladorVentaMaquillaje;
	let contadorPerfume;
	let contadorShampoo;
	let contadorMaquillaje;
	

	importeVenta = 0;
	acumuladorVentaPerfume=0;
	acumuladorVentaShampoo=0;
	acumuladorVentaMaquillaje=0;
	contadorPerfume=0;
	contadorShampoo=0;
	contadorMaquillaje=0;
	




	respuesta = "si"
	

	while(respuesta == "si")
	{
		vendedor=prompt("ingrese que vendedor es: Juan, María, Lucrecia"); //QUIEN ES
		
			while (vendedor != "Juan" && vendedor != "Maria"&& vendedor != "Lucrecia")
			{
				vendedor = prompt ("Ingrese uno de los tres nombres propuestos");
			}


			tipo = prompt("Ingrese el tipo de producto que vendió: Perfume, Shampoo o Maquillaje") //QUE PRODUCTO

			while(tipo != "perfume" && tipo != "shampoo" && tipo != "Maquillaje")
			{
				tipo = prompt("Error, ponga un tipo válido ");
			}

			importeVenta = prompt ("ingrese un importe que desee: ")
			importeVenta = parseInt (importeVenta);

			while (importeVenta <0) //IMPORTE
			{
				importeVenta = prompt ("ingrese un importe válido");
			}





			if(importeVenta >4999 && importeVenta <10001)//COMISION
			{
				porcentaje = importeVenta * 15/100;
			}
			else
			{
				if(importeVenta>10000)
				{
					porcentaje = importeVenta * 20/100;
				}
				else
				{
					porcentaje = importeVenta * 5/100;
				}

			}


			if (tipo == "perfume")
			{
				comision = importeVenta + porcentaje;
				acumuladorVentaPerfume = acumuladorVentaPerfume + comision;
				contadorPerfume = contadorPerfume + 1;

			}

			else
			{
				if (tipo == "Shampoo")
				{
				comision = importeVenta + porcentaje;
				acumuladorVentaShampoo = acumuladorVentaShampoo + comision;
				contadorShampoo = contadorShampoo + 1;

				}
				else
				{
				comision = importeVenta + porcentaje;
				acumuladorVenta = acumuladorVentaMaquillaje + comision;
				contadorMaquillaje = contador + 1;

				}
			}


		respuesta = prompt ("Quiere seguir colocando ventas?")
	}

}//FIN DE LA FUNCION









