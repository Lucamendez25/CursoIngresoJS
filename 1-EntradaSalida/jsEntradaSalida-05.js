 /*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()

{	
//concatenar: unir texto.	

let NombreIngresado;
let EdadIngresada;

//quiero tomar los datos
NombreIngresado=document.getElementById("txtIdNombre").value;
EdadIngresada=document.getElementById("txtIdEdad").value;

//Usted se llama José y tiene 66 años
alert("Usted se llama: "+NombreIngresado +" y tiene "+EdadIngresada +" años" );

}
	

//txtIdNombre
//txtIdEdad