function mostrar()
{	
	let contador;
	let acumulador;
	let numeroIngresado

contador=0
acumulador=0

														

	while(contador<5)
	
	{
		
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado)

		

		acumulador = acumulador + numeroIngresado; /*aca se quedan cada uno de los números ingresados, se guarda aca, y lo suma a los nuevos que vengan*/


		contador = contador+1;	/*acá pido 5 alertas. En el primero necesitaba que aparezca del 1 al 10, por eso lo colocaba arriba
				 				Cuando lo usaba en el primero, salian 10 alertas, pero no del 1 al 10, del 0 al 9*/

		//alert("número ingresado: " + numeroIngresado + "al contador"+contador); Esto para verificar que ande
	}							


	

	
	
	
	document.getElementById("txtIdSuma").value=acumulador; //los 5 números ingresados
	document.getElementById("txtIdPromedio").value=acumulador/5; //los 5 números, dividido 5, para su promedio;
}