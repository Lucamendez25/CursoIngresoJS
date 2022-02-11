/*Al ingresar una edad debemos informar
 si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). menor a  4 años es bebe, si tien 60 años o mas anciano*/


 function mostrar()
{
	let EdadIngresada;


    EdadIngresada=document.getElementById("txtIdEdad").value;
    EdadIngresada=parseInt(EdadIngresada);

        if(EdadIngresada>59)
        {
            alert("Usted es un anciano");
        }

            else
                if(EdadIngresada>17 && EdadIngresada<60)
                {
                    alert("Usted es mayor de edad");
                }

        
            else
                if(EdadIngresada>12 && EdadIngresada<18)
                {
                    alert("Usted es adolescente");
                }
            

            else
                if(EdadIngresada>3 && EdadIngresada<13)
                {
                    alert("Usted es un niño");
                }

            else
                if(EdadIngresada<4)
                {
                    alert("Usted es un bebé");
                }
                
	

} //FIN DE LA FUNCIÓN

//txtIdEdad