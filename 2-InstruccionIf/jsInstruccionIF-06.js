/*Al ingresar una edad debemos informar
 si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) o niño (menor a 13 años). menor a  4 años es bebe, si tien 60 años o mas anciano*/

/*


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
*/

 /*
Ejercicio 6 bis(usar if else):
Al ingresar por prompt una edad debemos informar si
la persona es anciano(mas de 70), mayor de edad (entre 70 y 18 años),
adolescente (entre 13 y 17 años), niño (menor a 13 años), bebe (0 a 3 años).
mostrar por ID el resultado.
*/


function mostrar()
{


    let EdadIngresada
    let mensaje
    

EdadIngresada=prompt("Ingrese su edad porfavor: ");
EdadIngresada=parseInt(EdadIngresada);
//si tenes mas de 70 años
if(EdadIngresada >69)
    {
        mensaje = "Usted es un anciano";
    }
//no es lo anterior
else
{      //tu edad es entre 18 a 70
    if(EdadIngresada>17 && EdadIngresada<71)
    {
       mensaje = "Usted es mayor de edad"; 
    }
    //sino es lo anterior
    else
    {   //tu edad es entre 13 a 17
        if(EdadIngresada>12 && EdadIngresada <18)
        {
           mensaje = "Usted es adolescente"; 
        }
        //sino es lo anterior
        else
        {     //tu edad es entre 4 a 13
            if (EdadIngresada>3 && EdadIngresada<14)
            {
                mensaje = "Usted es niño";
            }
            //sino, por descarte...
            else 
            {   //sos esto
                {
                    mensaje = "Usted es bebé";
                }
            }
        }
    }
}

document.getElementById("txtIdEdad").value = mensaje
    


}





