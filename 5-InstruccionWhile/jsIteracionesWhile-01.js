/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador;
	contador=0; 
	
	while(contador < 10)	//Hasta que no deje de ser verdadero esto, no va a parar de entrar al while.
	{	

		contador=contador + 1; //Esto esta para que empieze a sumar, sino quedaria en 0 el contador
								//primero sumo, antes de que llegue al mensaje, así inicia en 1.
		console.log (contador);

	}

							//cuando sea falso, va a salir. 
}//FIN DE LA FUNCIÓN