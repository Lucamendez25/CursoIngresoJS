/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//declare mi variable
	let NombreIngresado
	
    //pido el nombre por prompt
    //el prompt:pedirte desde la ventanita al usuario "como se llama"(en este ejemplo). No desde la caja de texto
    NombreIngresado = prompt ("ingrese su nombre");
	
	//quiero mostrar los datos, guardo=dato
	
document.getElementById ("txtIdNombre").value = NombreIngresado;
	
 alert("se guardo correctamente");
}

