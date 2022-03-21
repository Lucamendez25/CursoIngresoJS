/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let banderaDelPrimero; //Para que entre por primera vez o guarde algo.
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;


	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si'; //primera parte

	while(respuesta=="si")//segunda parte 
																							/*Utilizamos == si, porque la idea es que si te dice quiere continuar, vuelve al while. 
																							No como ocurria con la contraseña, que buscaba que si era diferente a la contraseña, lo denegabas*/
	{	
		numeroIngresado = prompt ("ingrese su número");
		numeroIngresado = parseInt (numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero= "ya se cargo el primero";
		}
		else
		{
			if(numeroMaximo < numeroIngresado)
			{
				numeroMaximo = numeroIngresado;
			}

			if(numeroMinimo > numeroIngresado)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta = prompt ("¿Quiere ingresar otro número?"); //tercera parte. Cambia la variable de condición para salir del while.
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;

}//FIN DE LA FUNCIÓN