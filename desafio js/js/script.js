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

const inputNombreCompleto = document.getElementById("inputNombreCompleto")
const inputDni = document.getElementById("inputDni")
const loginForm = document.getElementById("loginForm")
const contenido = document.getElementById("all")
contenido.className = "infoSeleccionOff"
const divTurno = document.getElementById("divTurno")
divTurno.className = "infoSeleccionOff"
const checkRecordar = document.getElementById("checkRecordar")
checkRecordar.addEventListener("click", ()=>{
    localStorage.setItem("Nombre Completo", inputNombreCompleto.value)
    localStorage.setItem("DNI", inputDni.value)
})
const btnContinuar = document.getElementById("btnContinuar")
btnContinuar.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputNombreCompleto.value === "" || inputDni.value === "") {
        swal({
            title: "No ha ingresado los datos correctamente",
            text: "Debe rellenar ambos campos correctamente",
            icon: "error",
            button: "Reingresar datos",
        });

    } else {
        contenido.className = "container"
        divTurno.className = "container"
        loginForm.className = "infoSeleccionOff"
    }
})



let carrito = []
let listaHospitales = []

// Funcion asincromatica para traer objetos desde el json
async function crearHospitales() {
    await fetch("./js/hospitales.json")
        .then(resp => resp.json()
            .then(data => {
                listaHospitales = data
                listaHospitales.forEach(hospitales => {
                    switch (hospitales.id) {
                        case '1':
                            italiano = new Opcion(hospitales.especializacion, hospitales.hospital, hospitales.direccion, hospitales.id);
                            break;
                        case '2':
                            garrahan = new Opcion(hospitales.especializacion, hospitales.hospital, hospitales.direccion, hospitales.id);
                            break;
                        case '3':
                            trauma = new Opcion(hospitales.especializacion, hospitales.hospital, hospitales.direccion, hospitales.id);
                            break;
                        case '4':
                            nutricion = new Opcion(hospitales.especializacion, hospitales.hospital, hospitales.direccion, hospitales.id);
                            break;
                        default:
                            return;
                    }
                });
            }))
    iniciarContenido()
}

crearHospitales()

const iniciarContenido = () => {
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
    const clickItaliano = document.getElementById("italiano")
    const clickGarrahan = document.getElementById("garrahan")
    const clickTrauma = document.getElementById("trauma")
    const clickCormillot = document.getElementById("cormillot")


    let avisoHospitales = (dato) => {
        infoSeleccion.innerHTML = "La direccion de su hospital seleccionado es " + dato.direccion
        inputTomarturno.className = "mb-3"
        seleccion.className = "container"
        cuotas.className = "container"
    }


    clickItaliano.addEventListener("click", () => {
        avisoHospitales(italiano)
    })
    clickGarrahan.addEventListener("click", () => {
        avisoHospitales(garrahan)
    })
    clickTrauma.addEventListener("click", () => {
        avisoHospitales(trauma)
    })
    clickCormillot.addEventListener("click", () => {
        avisoHospitales(nutricion)
    })


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

    const alertError = () => {
        swal({
            title: "No ha seleccionado una opcion correcta",
            text: "No ha seleccionado correcamente los datos, ingrese nuevamente",
            icon: "error",
            button: "Finalizar",
        });
    }
    const alertBien = () => {
        carrito.push("Ha seleccionado un turno para " + fechaSeleccionada.value)
        carrito.push(efectivo.value)
        swal({
            title: "Turno seleccionado correctamente",
            text: "Ha seleccionado un turno para " + fechaSeleccionada.value + "\n" + efectivo.value + "\n",
            icon: "success",
            button: "Finalizar",
        });
    }
    const valorInput = () => {
        carrito.length === 0 ? alertError() : alertBien();
        localStorage.setItem("Fecha Seleccionada", fechaSeleccionada.value)
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

    const mostrarInteres = (dato) => {
        cuotasParrafo.innerHTML = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * dato.value + "% en " + dato.value + " Cuotas"
        cuotasParrafo.className = "infoSeleccionOn"
        cuotasParrafo.value = "El total de su turno es de $" + precioFinal + " con un interes de " + interes * dato.value + "% en " + dato.value + " Cuotas"
        carrito.push(" con un interes de " + interes * dato.value + "% en " + dato.value + " Cuotas")
    }
    cuota3.addEventListener("click", () => {
        mostrarInteres(cuota3)
    })
    cuota6.addEventListener("click", () => {
        mostrarInteres(cuota6)
    })
    cuota9.addEventListener("click", () => {
        mostrarInteres(cuota9)
    })
    cuota12.addEventListener("click", () => {
        mostrarInteres(cuota12)
    })
}





