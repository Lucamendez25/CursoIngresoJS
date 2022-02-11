/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
/*{

	//creamos variables

	let sueldo;	
	let aumentoAlSueldo;
	let sueldoConAumento;


	//buscamos los id, y los guardamos en las variables

	sueldo=document.getElementById ("txtIdSueldo").value;

	//convertimos a enteros

	sueldo=parseInt (sueldo);

	//saco el aumento

	aumentoAlSueldo = sueldo*10/100;

	//sumamos el aumento al aumento y lo guardamos en resultado

	sueldoConAumento = sueldo + aumentoAlSueldo

	//muestro por id el resultado

    document.getElementById ("txtIdResultado").value = sueldoConAumento;

	
}
*/

/*

//txtIdSueldo
//txtIdResultado


/*
9 bis 
lo anterior mas.
se debe pedir el % por prompt
*/
{

	let ingresoSueldo;
	let resultado;
	let aumento;
	let porcentaje;

	//pido los datos
	ingresoSueldo = document.getElementById('txtIdSueldo').value;
	porcentaje = prompt("ingrese el porcentaje de aumento que le gustaria: ");

	//convierto los datos que me vienen como texto a numeros
	ingresoSueldo = parseInt(ingresoSueldo);
	//40
	porcentaje = parseInt(porcentaje);

//                            
	aumento = ingresoSueldo*porcentaje/100;



	resultado = ingresoSueldo + aumento;


 	//document.getElementById('txtIdResultado').value = resultado;

 	alert("usted ingreso $"+ingresoSueldo+" el aumento ingresado es del %"+porcentaje+" que equivale a $"+aumento+" el total es: $"+resultado);

}


