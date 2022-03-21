/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/


function mostrar()
{
	let ancho;
	let largo;
	let perimetro;


	ancho = prompt ("Ingrese el ancho del rectangulo");
	largo = prompt ("Ingrese el largo del rectangulo");

	ancho = parseInt(ancho);
	largo = parseInt (largo);



	perimetro = ancho + ancho + largo + largo;

	alert ("su perimetro es de " + perimetro);

} //FIN DE LA FUNCIÓN.
