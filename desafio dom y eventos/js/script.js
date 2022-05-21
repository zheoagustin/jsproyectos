let precioFinal = 3000
let interes = 5
class Opcion {
    constructor(especializacion, hospital, direccion, id) {
        this.especializacion = especializacion;
        this.hospital = hospital;
        this.direccion = direccion;
        this.id = id;
    }
}


const italiano = new Opcion("Ortodoncia", "Hospital Italiano", "Cordoba 2745", 1)
const garrahan = new Opcion("Pediatria", "Hospital Garrahan", "Pichincha 1890", 2)
const trauma = new Opcion("Traumatologia", "Hospital De Trauma Federico Abete", "Miraflores 123", 3)
const nutricion = new Opcion("Nutricionista", "Hospital Municipal de Nutricion Dr Alberto Cormillot", "Cordoba 2745", 4)
let turnos = [italiano, garrahan, trauma, nutricion]
let carrito = []

const inputTomarturno = document.getElementById("inputTurno")
const infoSeleccion = document.getElementById("infoSeleccion");
const seleccion = document.getElementById("direccion")
const fechaSeleccionada = document.getElementById("labelTurno")
const btnTurno = document.getElementById("btnTurno")
const cuotas = document.getElementById("cuotas")
const efectivo = document.getElementById("pEfectivo")
const pagoEfectivoOpcion = document.getElementById("pagoEfectivo")
const pagoCuotasOpcion = document.getElementById("pagoCuotas")
const cantidadCuotas = document.getElementById("cantidadCuotas")
const cuota3 = document.getElementById("3")
const cuota6 = document.getElementById("6")
const cuota9 = document.getElementById("9")
const cuota12 = document.getElementById("12")
const cuotasParrafo = document.getElementById("pCuotas")





let avisoItaliano = () => {
    console.log("Ha seleccionado un turno para para " + italiano.especializacion + " " + italiano.hospital)
    infoSeleccion.innerHTML = "La direccion de su hospital seleccionado es " + italiano.direccion
    inputTomarturno.className = "mb-3"
    seleccion.className = "container"
    cuotas.className = "container"
    carrito.push(italiano.especializacion, italiano.hospital, italiano.direccion)
        ;


}
const clickItaliano = document.getElementById("italiano")
clickItaliano.addEventListener("click", avisoItaliano)



let avisoGarrahan = () => {
    console.log("Ha seleccionado un turno para para " + garrahan.especializacion + " " + garrahan.hospital)
    infoSeleccion.innerHTML = "La direccion de su hospital seleccionado es " + garrahan.direccion
    inputTomarturno.className = "mb-3"
    seleccion.className = "container"
    cuotas.className = "container"
    carrito.push(garrahan.especializacion, garrahan.hospital, garrahan.direccion)
        ;
}
const clickGarrahan = document.getElementById("garrahan")
clickGarrahan.addEventListener("click", avisoGarrahan)

let avisoTrauma = () => {
    console.log("Ha seleccionado un turno para para " + trauma.especializacion + " " + trauma.hospital)
    infoSeleccion.innerHTML = "La direccion de su hospital seleccionado es " + trauma.direccion
    inputTomarturno.className = "mb-3"
    seleccion.className = "container"
    cuotas.className = "container"
    carrito.push(trauma.especializacion, trauma.hospital, trauma.direccion)
        ;
}
const clickTrauma = document.getElementById("trauma")
clickTrauma.addEventListener("click", avisoTrauma)


let avisoCormillot = () => {
    console.log("Ha seleccionado un turno para para " + nutricion.especializacion + " " + nutricion.hospital)
    infoSeleccion.innerHTML = "La direccion de su hospital seleccionado es " + nutricion.direccion
    inputTomarturno.className = "mb-3"
    seleccion.className = "container"
    cuotas.className = "container"
    carrito.push(nutricion.especializacion, nutricion.hospital, nutricion.direccion)
        ;
}
const clickCormillot = document.getElementById("cormillot")
clickCormillot.addEventListener("click", avisoCormillot)

let mostrarDir = () => {
    infoSeleccion.className = "infoSeleccionOn"

}
const dirSi = document.getElementById("dirSi")
dirSi.addEventListener("click", mostrarDir)

let mostrarDirOff = () => {
    infoSeleccion.className = "infoSeleccionOff"

}
const dirNo = document.getElementById("dirNo")
dirNo.addEventListener("click", mostrarDirOff)


const valorInput = () => {
    console.log(fechaSeleccionada.value)
    carrito.push("Ha seleccionado un turno para " + fechaSeleccionada.value)
    carrito.push(efectivo.value)
    alert("Ha seleccionado un turno para " + fechaSeleccionada.value + "\n" + efectivo.value  + "\n" )

    ;
}
btnTurno.addEventListener("click", valorInput)

const resultadoEfectivo = () => {
    efectivo.innerHTML = "El total de su turno es de $" + precioFinal
    efectivo.className = "infoSeleccionOn"
    efectivo.value = "El total de su turno es de $" + precioFinal
    cantidadCuotas.className = "infoSeleccionOff"
    cuotasParrafo.className = "infoSeleccionOff"
}
pagoEfectivoOpcion.addEventListener("click", resultadoEfectivo)

const mostrarCuotas = () => {
    cantidadCuotas.className = "container"
    efectivo.className = "infoSeleccionOff"
    efectivo.value = "El total de su turno es de $" + precioFinal
}
pagoCuotasOpcion.addEventListener("click", mostrarCuotas)

const mostrarInteres3 = () => {
    cuotasParrafo.innerHTML = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota3.value + "% en " + cuota3.value + " Cuotas"
    cuotasParrafo.className = "infoSeleccionOn"
    cuotasParrafo.value = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota3.value + "% en " + cuota3.value + " Cuotas"
    carrito.push (" con un interes de " + interes * cuota3.value + "% en " + cuota3.value + " Cuotas")
}
cuota3.addEventListener("click", mostrarInteres3)

const mostrarInteres6 = () => {
    cuotasParrafo.innerHTML = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota6.value + "% en " + cuota6.value + " Cuotas"
    cuotasParrafo.className = "infoSeleccionOn"
    cuotasParrafo.value = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota6.value + "% en " + cuota6.value + " Cuotas"
    carrito.push (" con un interes de " + interes * cuota6.value + "% en " + cuota6.value + " Cuotas")
}
cuota6.addEventListener("click", mostrarInteres6)

const mostrarInteres9 = () => {
    cuotasParrafo.innerHTML = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota9.value + "% en " + cuota9.value + " Cuotas"
    cuotasParrafo.className = "infoSeleccionOn"
    cuotasParrafo.value = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota9.value + "% en " + cuota9.value + " Cuotas"
    carrito.push (" con un interes de " + interes * cuota9.value + "% en " + cuota9.value + " Cuotas")
}
cuota9.addEventListener("click", mostrarInteres9)

const mostrarInteres12 = () => {
    cuotasParrafo.innerHTML = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota12.value + "% en " + cuota12.value + " Cuotas"
    cuotasParrafo.className = "infoSeleccionOn"
    cuotasParrafo.value = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * cuota12.value + "% en " + cuota12.value + " Cuotas"
    carrito.push (" con un interes de " + interes * cuota12.value + "% en " + cuota12.value + " Cuotas")
}
cuota12.addEventListener("click", mostrarInteres12)




