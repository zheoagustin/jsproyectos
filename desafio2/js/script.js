function opcion (especializacion, hospital , direccion) {
    this.especializacion = especializacion;
    this.hospital = hospital;
    this.direccion = direccion;
}

const opcion1 = new opcion ("Ortodoncia" , "Hospital Italiano" , "Cordoba 2745")
const opcion2 = new opcion ("Pediatria" , "Hospital Garrahan" , "Pichincha 1890")
const opcion3 = new opcion ("Traumatologia" , "Hospital De Trauma Federico Abete" , "Miraflores 123")
const opcion4 = new opcion ("Nutricionista" , "Hospital Municipal de Nutricion Dr Alberto Cormillot" , "Cordoba 2745")

let direccionPregunta = ""
let solicitud = parseInt (prompt("Desea solicitar turno para: \n\t 1 - Ortodoncia \n\t 2 - Pediatria \n\t 3 - Traumatologia \n\t 4 - Nutricionista \n\t ESC para salir " ))

if (solicitud === 1 || solicitud === 2 || solicitud ===3 || solicitud === 4) {
    switch (solicitud) {
        case 1:
            alert("Ha seleccionado un turno para " + opcion1.especializacion + " en el " + opcion1.hospital);
            console.log(opcion1);
            direccionPregunta = prompt ("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert ("La direccion es " + opcion1.direccion)
            } else {}
            break;
            
        case 2:
            alert("Ha seleccionado un turno para " + opcion2.especializacion + " en el " + opcion2.hospital);
            console.log(opcion2);
            direccionPregunta = prompt ("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert ("La direccion es " + opcion2.direccion)
            } else {}
            break;
               
        case 3:
            alert("Ha seleccionado un turno para " + opcion3.especializacion + " en el " + opcion3.hospital);
            console.log(opcion3);
            direccionPregunta = prompt ("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert ("La direccion es " + opcion3.direccion)
            } else {} 
             break;
        case 4:
            alert("Ha seleccionado un turno para " + opcion4.especializacion + " en el " + opcion4.hospital);
            console.log(opcion4);
            direccionPregunta = prompt ("Desea conocer su direccion? (SI o NO)")
            if (direccionPregunta === "SI" || direccionPregunta === "Si" || direccionPregunta === "si") {
                alert ("La direccion es " + opcion4.direccion)
            } else {}
            break;               
    
        default: 
            break;
    }
    let turno = prompt ("Ingrese fecha y mes del turno")
    
    while (turno != "CONTINUAR") {    
        console.log("Se ah agendado un turno para el " + turno );
        turno = prompt ("Si ingreso correctamente Escriba CONTINUAR, sino repita sus datos")  
    }
    let precioFinal = 3000
    let interes = 5
    let pregunta = prompt ("Desea pagar su consulta en cuotas? (Si o No)")
    if (pregunta === "SI" || pregunta === "Si" || pregunta === "si") {
            
            let cuotas = parseInt (prompt ("En cuantas cuotas desea pagar su Asesoramiento"))
            
            console.log("En " + cuotas + " cuotas, el interes es del  " + interes * cuotas + " %")
            
            console.log("su consulta tiene un precio final de " + precioFinal +"$");
                
            alert ("Su consulta tiene un precio final de: " + precioFinal  + "$, con un interes del " + interes * cuotas + " % en " + cuotas + " cuotas")
        }
            else {
                alert ("Su precio final es de " + precioFinal)
            }
            if (solicitud === 1) {
                alert("Fue agendado un turno en "+ opcion1.especializacion +" en el " + opcion1.hospital + ", Muchas gracias por su tiempo")
            } else if (solicitud === 2) {
                alert("Fue agendado un turno en "+ opcion2.especializacion +" en el " + opcion2.hospital + ", Muchas gracias por su tiempo")
            } else if (solicitud === 3) {
                alert("Fue agendado un turno en "+ opcion3.especializacion +" en el " + opcion3.hospital + ", Muchas gracias por su tiempo")
            } else if (solicitud === 4) {
                alert("Fue agendado un turno en "+ opcion4.especializacion +" en el " + opcion4.hospital + ", Muchas gracias por su tiempo")
            } else {
            
            }
} else if (solicitud <1 || solicitud >4 ){
    alert("La opcion ingresada no es valida, intente mas tarde")
}
else {
    alert ("Lo esperamos nuevamente")
}

        

