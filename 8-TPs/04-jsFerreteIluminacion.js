/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ 
    //declaro
    let cantidadLamparas;
    let precioLamparas;
    let precioSinDescuento; 
    let precioFinal
    let descuento;
    let porcentaje;


    //tomo id
    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    
    //parseo
    cantidadLamparas=parseInt(cantidadLamparas);
    
    //35 peso cada lámpara
   
       precioLamparas = 35;
       porcentaje = 0;


       precioSinDescuento= cantidadLamparas * precioLamparas;
      
    //si es mayor a 5
       if(cantidadLamparas > 5)
       
       {
        porcentaje = 50;
       }


    descuento=precioSinDescuento * porcentaje / 100;

    precioFinal=precioSinDescuento-descuento;
        
    
    document.getElementById("txtIdprecioDescuento").value = precioFinal;


}//fin de la función

//txtIdCantidad
//Marca
//txtIdprecioDescuento