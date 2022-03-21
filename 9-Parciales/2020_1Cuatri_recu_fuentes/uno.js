/*
3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
    -Origen (“Asia”, “Europa”, “América”)
    -Cantidad de vacunas (entre 500000 y 2500000)
    -Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
    a- El origen que envió menor cantidad de vacunas
    b- El total sin descuentos a pagar por los gastos de los viajes
    c- Si en total se recibieron mas de 10 millones de vacunas se hace
    un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
    descuento es del 15% con menor cantidad no hay descuento.
    Informar si hubo descuento de cuanto fue y el importe final con
    Descuento.
*/ 
function mostrar()
{
    //variables

    let origen;
    let cantidadVacunas;
    let costoVuelo;
    let acumuladorAsia=0;
    let acumuladorEuropa=0;
    let acumuladorAmerica=0;
    let mensajeOrigen;
    let totalSinDescuento=0;
    let acumuladorDeVacunas=0;
    let descuento;
    let totalConDescuento;

    let seguir="si";

    
	while(seguir=="si")//hasta que el usuario quiera
    {
        //validar
        origen=prompt("ingrese el origen");
        origen=origen.toLowerCase();

        while(origen!="asia" && origen!="europa" && origen!="america")
        {
           origen=prompt("error, ingrese el origen");
           origen=origen.toLowerCase();
        }


        cantidadVacunas=parseInt(prompt("Ingrese cantidad de vacunas(500000 y 2500000)"));
        
        while(cantidadVacunas<500000 || cantidadVacunas>2500000)
        {
            cantidadVacunas=parseInt(prompt("error,Ingrese cantidad de vacunas(500000 y 2500000)"));

        }

        costoVuelo=parseInt(prompt("Ingrese costo del vuelo(100000 y 5000000)"));
        
        while(costoVuelo<100000 || costoVuelo>5000000)
        {
            costoVuelo=parseInt(prompt("error,Ingrese el costo del vuelo(100000 y 5000000)"));

        }

        //buscar el origen que envio menos cantidad de vacunas
        switch(origen)
        {
            case "asia":
                acumuladorAsia=acumuladorAsia+cantidadVacunas;

            break;
            case "europa":
                acumuladorEuropa=acumuladorEuropa+cantidadVacunas;
            break;
            case "america":
                acumuladorAmerica=acumuladorAmerica+cantidadVacunas;
            break;
        }

        //b
        totalSinDescuento=totalSinDescuento+costoVuelo;
       
        //c
        acumuladorDeVacunas=acumuladorDeVacunas+cantidadVacunas;

        seguir=prompt("desea seguir?si/no","si");
    }

    //a)
    if(acumuladorEuropa<acumuladorAmerica && acumuladorEuropa<acumuladorAsia)
    {
        mensajeOrigen = "Europa";
    }
    else
    {
        if(acumuladorAmerica<acumuladorAsia)
        {
            mensajeOrigen = "America";
        }
        else
        {
            mensajeOrigen = "Asia";
        }
    }

    //c)
    if(acumuladorDeVacunas>10000000)
    {  
        descuento = totalSinDescuento*0.25;
    }
    else
    {   
        if(acumuladorDeVacunas>5000000)
        {
            descuento = totalSinDescuento*0.15;
        }
        else
        {
            descuento=0;
        }

    }

    totalConDescuento = totalSinDescuento-descuento;

    document.write("La menor cantidad de vacunas enviadas es de: " + mensajeOrigen);
    document.write("<br> El total del costo del vuelo sin descuento es de: " + totalSinDescuento);
    if(descuento!=0)
    {
         document.write("<br> El total con descuento es de:" + totalConDescuento + " y el descuento es de: " + descuento);
    }
   


}
