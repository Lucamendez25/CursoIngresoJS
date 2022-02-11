/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

//let numero1=10 (NO, acá solo declaro la variable, no la uso)(no declaro y asigno, declaro de un lado, asigno por otro)
	let numeroUno;
	let numeroDos;
	let resultado; 
//en un lado declaro TODAS las variables. No asigar en diferentes lugar, es mala práctica.

numeroUno = document.getElementById ('txtIdNumeroUno').value;
numeroDos = document.getElementById ('txtIdNumeroDos').value;
 
//antes de hacer la suma hay que "parsear"
//parseInt, me convierte un texto en número.

numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

//después de parsear, ahí colocas resultado.
resultado = numeroUno+numeroDos;
	


 alert("la suma de estos dos números es "+resultado);
}

//txtIdNumeroUno
//txtIdNumeroDos