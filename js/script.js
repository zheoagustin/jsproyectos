let opcion = parseFloat (prompt ("Ingrese numero del 1 al 4") )

switch (opcion) {
    case 1: alert ("Ha ingresado la opcion de seleccion de turnos")
        
        break;
    case 2: alert ("Ha ingresado la opcion de seleccion de turnos")
        
        break;
    case 3: alert ("Ha ingresado la opcion de seleccion de turnos")
        
     break;
    case 4: alert ("Ha ingresado la opcion de seleccion de turnos")
        
        break;

    default: alert ("Su opcion es incorrecta")
        break;
}

alert ("Ingrese Mes del turno, dia y Luego SALIR para su turno")
let turno = prompt ("Ingrese fecha y mes del turno")

while (turno != "SALIR") {    
    console.log("Se ah agendado un turno para el " + turno );
   turno = prompt ("Si ingreso correctamente Escriba SALIR, sino repita sus datos")
   
}
let cuota = 6;
let tabla = parseInt (prompt ("En cuantas cuotas desea pagar su Asesoramiento"))
for (let i=1; i<=tabla; i++) {
    console.log("En " + i + " cuotas, el interes es del  " + cuota * i + " %"
    )

}
console.log("su consulta tiene un precio final de " + 300 * tabla +"$");
alert ("Su consulta tiene un precio final de: " + 300 * tabla + "$, consulte el interes en la consola de su navegador")