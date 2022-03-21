/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una
compra productos de la construccion,
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento 
sobre el total a pagar.

Si compro más de 30 bolsas en total tenes 25% de descuento
 sobre el total a pagar.

a) El importe total a pagar , bruto sin descuento y... 
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas. 
f) El tipo mas caro
*/
function mostrar()
{

    let tipo;
    let cantidadBolsas;
    let precioPorBolsa;

    let acumuladorBolsasTotal = 0;

    let acumuladorBolsasArena=0;
    let acumuladorBolsasCal=0;
    let acumuladorBolsasCemento=0;

    let acumuladorPrecioArena = 0;
    let acumuladorPrecioCal = 0;
    let acumuladorPrecioCemento = 0;



    let totalMasCantidad=0;
    let tipoMasCaroMensaje;

    let descuento;

    let totalSinDescuento=0;
    let totalConDescuento=0;

    let respuesta = "si";

    while(respuesta == "si")
    {
        tipo = prompt ("Ingrese arena, cal, cemento");
        while(tipo !="arena" && tipo != "cal" && tipo !="cemento")
        {
            tipo = prompt ("Error, ingrese arena, cal, cemento");  
        }

        cantidadBolsas = prompt("Ingrese cantidad de bolsas: ");
        cantidadBolsas = parseInt(cantidadBolsas);
        while (cantidadBolsas <0)
        {
            cantidadBolsas = prompt("Error, ingrese cantidad de bolsas: ");
            cantidadBolsas = parseInt(cantidadBolsas);
        }
        precioPorBolsa = prompt("Ingrese precio por bolsa: ");
        precioPorBolsa = parseInt (precioPorBolsa);

        while (precioPorBolsa < 0)
        {
            precioPorBolsa = prompt("Error, ingrese precio por bolsa: ");
            precioPorBolsa = parseInt (precioPorBolsa);
        }

        switch(tipo)
        {
            case"arena":
                acumuladorBolsasArena = acumuladorBolsasArena + cantidadBolsas;
                acumuladorPrecioArena = acumuladorPrecioArena + precioPorBolsa;
                break;

            case"cal":
                acumuladorBolsasCal = acumuladorBolsasCal + cantidadBolsas;
                acumuladorPrecioCal = acumuladorPrecioCal + precioPorBolsa;
                break;

            default:
                acumuladorBolsasCemento = acumuladorBolsasCemento + cantidadBolsas;
                acumuladorPrecioCemento = acumuladorPrecioCemento + precioPorBolsa; 
                break;
        }

        acumuladorBolsasTotal = acumuladorBolsasTotal + cantidadBolsas;
        totalSinDescuento = totalSinDescuento + acumuladorPrecioArena + acumuladorPrecioCement + acumuladorBolsasCal;


        respuesta = prompt ("Quiere continuar: ");
    }

    if(acumuladorBolsasTotal > 30)
    {
        descuento = totalSinDescuento * 25/100;
        totalConDescuento = totalSinDescuento - descuento;
    }
    else
    {
        if(acumuladorBolsasTotal > 10)
        {
            descuento = totalSinDescuento * 15/100; 
            totalConDescuento = totalSinDescuento - descuento;
        }
        else
        {
            totalConDescuento = "No supero las 10, no hay descuento."
        }
        
    }

    if(acumuladorBolsasArena > acumuladorBolsasCal && acumuladorBolsasArena > acumuladorBolsasCemento)
    {
        totalMasCantidad = "Arena";
    }
    else
    {
        if(acumuladorBolsasCal > acumuladorBolsasCemento)
        {
            totalMasCantidad = "Cal";
        }
        else
        {
            totalMasCantidad = "Cemento";
        }
    }

    if(acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento)
    {
        tipoMasCaroMensaje = "Arena";
    }
    else
    {
        if(acumuladorPrecioCal > acumuladorPrecioCemento)
        {
            tipoMasCaroMensaje = "Cal";
        }
        else
        {
            tipoMasCaroMensaje = "Cemento";
        }
    }







    document.write("el importe total a pagar, bruto sin descuento es: " + totalSinDescuento);
    document.write("<br> el importe total con descuento es: " + totalConDescuento);
    document.write("<br>el tipo con más cantidad de bolsas es: "+ totalMasCantidad);
    document.write("<br>el tipo más caro es: "+tipoMasCaroMensaje);



        


 
}//FIN DE LA FUNCION


/*
Ejemplo:
arena
2
50




Ejemplo:
cal
3
20


Ejemplo:
cemento
5
100

Ejemplo:

arena
5
50

Ejemplo:
cemento
20
100

*/ 


