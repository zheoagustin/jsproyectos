let turno = prompt ("Ingrese fecha y mes del turno")

while (turno != "SALIR") {    
    console.log("Se ah agendado un turno para el " + turno );
    turno = prompt ("Si ingreso correctamente Escriba Salir, sino repita sus datos")
   
}

let precioFinal = 3000
let interes = 5
let pregunta = prompt ("Desea pagar su consulta en cuotas? (Si o No)")

if (pregunta === "SI") {
    
    let cuotas = parseInt (prompt ("En cuantas cuotas desea pagar su Asesoramiento"))

    console.log("En " + cuotas + " cuotas, el interes es del  " + interes * cuotas + " %")

    console.log("su consulta tiene un precio final de " + precioFinal +"$");
    
    alert ("Su consulta tiene un precio final de: " + precioFinal  + "$, con un interes del " + interes * cuotas + " % en " + cuotas + " cuotas")
}
else {
    alert ("Su precio final es de " + precioFinal)
}