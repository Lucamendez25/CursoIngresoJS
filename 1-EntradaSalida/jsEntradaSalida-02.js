/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //declaro la variable
    let NombreIngresado; 

    //Guardo el nombre
		NombreIngresado=prompt("Ingresa tu nombre")

    //Muestro al usuario
    //Concateno la variable
	alert("su nombre es: "+NombreIngresado);
}

