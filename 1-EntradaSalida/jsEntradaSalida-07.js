/*  
Méndez Luca
e/s 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado; 
	
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos = document.getElementById ("txtIdNumeroDos").value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno+numeroDos;

/*document.write (numeroUno);
document.write (numeroDos);
document.write (resultado);*/

	alert("la suma de estos dos números es "+resultado);

}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado; 
	
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos = document.getElementById ("txtIdNumeroDos").value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno-numeroDos;

/*document.write (numeroUno);
document.write (numeroDos);
document.write (resultado);*/

	alert("la resta de estos dos numeros es "+resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado; 
	
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos = document.getElementById ("txtIdNumeroDos").value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno*numeroDos;

/*document.write (numeroUno);
document.write (numeroDos);
document.write (resultado);*/

	alert("la multiplicación de estos dos numeros es "+resultado);
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado; 
	
	numeroUno = document.getElementById ("txtIdNumeroUno").value;
	numeroDos = document.getElementById ("txtIdNumeroDos").value;
	
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno/numeroDos;


/*document.write (numeroUno);
document.write (numeroDos);
document.write (resultado);*/


	alert("la división de estos dos numeros es "+resultado);
	
}

//txtIdNumeroUno
//txtIdNumeroDos

/*
operador suma= +
operador resta= -
operador multiplicación= *
operador divisor= /
modulo, para acceder al resto de un divisor= %
*/
