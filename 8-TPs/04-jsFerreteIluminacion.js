
 /*
function CalcularPrecio () 
{ 
    //declaro
    let cantidadLamparas;
    let precioLamparas;
    let precioSinDescuento; 
    let precioFinal;
    let descuento;
    let porcentaje;
    let marca;
    let IIBB;
    let precioConIIBB;


    //tomo id
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    marca=document.getElementById("Marca").value;
    
    //parseo
    cantidadLamparas=parseInt(cantidadLamparas);
    
    //35 peso cada lámpara
   
       precioLamparas = 35;
       porcentaje = 0;


       precioSinDescuento= cantidadLamparas * precioLamparas;
      
    //si es mayor a 5
       if(cantidadLamparas > 5)//A
       
       {
        porcentaje = 50;
       }
       
       else
       {
         if (cantidadLamparas==5)//B
         {
            if(marca == "ArgentinaLuz")
            {
               porcentaje=40;
            }
            else
            {
               porcentaje=30;
            }
            
            
         }
        
         else
            {
               if(cantidadLamparas==4)//C
               {
                  if(marca=="ArgentinaLuz" || marca== "FelipeLamparas")
                  {
                     porcentaje=25;
                  }
                  else
                  {
                     porcentaje=20;
                  }
               }
               
               else
               {
                  if(cantidadLamparas==3)//D
                  {
                     if(marca=="ArgentinaLuz")
                     {
                        porcentaje=15;
                     }
                     else
                     {
                        if(marca=="FelipeLamparas")
                        {
                           porcentaje=10;
                        }
                        else
                        {
                           porcentaje=5;
                        }
                     }
                  }
               }

            }
       }
       
       descuento=precioSinDescuento * porcentaje / 100;
       precioFinal=precioSinDescuento-descuento;
       document.getElementById("txtIdprecioDescuento").value = precioFinal; 

       if(precioFinal>=120)//E
            {
               porcentaje=10
               {
                  IIBB = precioFinal * porcentaje/100;
                  precioConIIBB = precioFinal + IIBB;
                  alert("usted pago " + IIBB + " de IIBB");
                  document.getElementById("txtIdprecioDescuento").value = precioConIIBB;
               }
            }





      

      



}
*/
//fin de la función

//txtIdCantidad
//Marca
//txtIdprecioDescuento

/*4.  Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A. Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B. Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio () 

 {
   let cantidadLamparas;
   let precioNormal;
   let marca;
   let porcentaje;
   let descuento;
   let precioConDescuento
   let IIBB
   let precioConIIBB


   cantidadLamparas = document.getElementById("txtIdCantidad").value;
   marca=document.getElementById("Marca").value;
   precioConDescuento = document.getElementById("txtIdprecioDescuento").value;


   cantidadLamparas=parseInt(cantidadLamparas);


   precioNormal = cantidadLamparas * 35


   switch (cantidadLamparas)
   {
      

      case 5: //B
         switch(marca)
         {
            case "ArgentinaLuz":
            porcentaje = -40
            mensaje = precioConDescuento;
            break;

            default:
            porcentaje= -30;
            mensaje = precioConDescuento;
            break;
         }
      break;   
      case 4: //C
         switch(marca)
         {  
            case "FelipeLamparas":
            case "ArgentinaLuz":
               porcentaje = -25
               mensaje = precioConDescuento;
               break;

            default:
               porcentaje= -20;
               mensaje = precioConDescuento;
               break;   
         }
      break;
      case 3: //D
         switch(marca)
         {  
            case "ArgentinaLuz":
               porcentaje = -15
               mensaje = precioConDescuento;
               break;

            case "FelipeLamparas":                    
               porcentaje= -10;
               mensaje = precioConDescuento;
               break;   

            default:
               porcentaje= -5;
               mensaje = precioConDescuento;
               break;   
         }
      break;
      case 2:                            
      case 1:
      porcentaje = 0;  
        

      break;   
      default:
         porcentaje= -50;
         mensaje = precioConDescuento;
         break;     

         
   }



 


         descuento = precioNormal * porcentaje/100;
precioConDescuento = precioNormal + descuento;

if(precioConDescuento>=120)//E    
            {
               porcentaje=10

                  IIBB = precioConDescuento * porcentaje/100;
                  precioConDescuento = precioConDescuento + IIBB;
                  alert("usted pago " + IIBB + " de IIBB");
   

            }

mensaje = precioConDescuento
document.getElementById("txtIdprecioDescuento").value = mensaje;

   

 }

//txtIdCantidad
//Marca
//txtIdprecioDescuento





