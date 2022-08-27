//let puntosRealizados = parseInt(prompt("Ingrese los puntos que realizó el jugador"))
//console.log("El jugador metió " + puntosRealizados )

//let partidosJugados = parseInt(prompt("Ingrese la cantidad de partidos jugados"))
//console.log("El jugador jugó " + partidosJugados)

//let promedioPuntos = puntosRealizados / partidosJugados
//alert(`El promedio del jugador es de ${promedioPuntos}`)

//let preguntaEquipo = prompt ("¿Usted de qué equipo es?")
//let preguntaJugador = prompt ("¿Qué jugador es su favorito?")
//let preguntaPosicion = prompt ("¿Qué posición es la que más le gusta?")

//if ((preguntaEquipo.toLowerCase() == "knicks") && (preguntaJugador.toLowerCase() == "randle") &&
//(preguntaPosicion.toLowerCase() == "alero"))  {
    //alert(`Su jugador favorito es Randle`)
//}
//else{
   //alert(`Su jugador favorito es otro que no es Randle`)
//}

//let preguntaEquipo = prompt ("¿Usted de qué equipo es?")
//let preguntaJugador = prompt ("¿Qué jugador es su favorito?")
//let preguntaPosicion = prompt ("¿Qué posición es la que más le gusta?")

//if ((preguntaEquipo.toLowerCase() != "knicks") && (preguntaJugador.toLowerCase() != "randle") &&
//(preguntaPosicion.toLowerCase() != "alero"))  {
//    alert(`Su jugador favorito es otro que no es Randle`)
//}
//else{
//   alert(`Su jugador favorito es Randle`)
//}

//let numeroTabla = parseInt(prompt("Elija una tabla de multiplicar"))

//let limiteTabla = parseInt(prompt("Ingrese hasta donde quiere multiplicar"))

//for(let i = 0; i <= limiteTabla; i = i + 1){
//    let multiplicar = numeroTabla*i
//    alert(`${numeroTabla} x ${i} = ${multiplicar}`)
//}

//let miCondicion = true

//let intentos = 0

//do{
//    let jugadorHistorico = prompt ("¿Cuál es el jugador con más anillos de la NBA?")
//    if (jugadorHistorico.toLowerCase() == "bill russell"){
//        alert("Acertaste la respuesta. Ganastae un viaje a Aruba")
//        miCondicion = false
//    } else {
//        intentos = intentos + 1
//        alert("Usted no acertó. Estudie más. Ya erraste " + intentos)
//    }
//
//} while (miCondicion && intentos < 5)

//let datos = prompt("¿Quiere comprar el NBA League Pass? Escoja entre sí o no")

//while(datos.toLowerCase() == "si"){
//    let meses = prompt ("Elija cuantos meses se quiere suscribir")
//    let pago = prompt ("Elija su método de pago")

//    alert(`Usted se suscribió por ${meses} meses y pagará con ${pago}`)

//    datos = prompt("¿Desea cambiar los datos de la compra? Escoja entre sí o no")


//}

let equipoElegido = prompt ("Ingrese su equipo favorito")

switch(equipoElegido.toLowerCase()){
    case "kings":
    alert("Usted elegió a los Kings y es un equipo chico")
    break
    case "knicks":
    alert("Usted elegió a los Knicks y es un equipo chico")
    break
    case "timberwolves":
    alert("Usted elegió a los Timberwolves y es un equipo chico")
    break
    default:
    alert(`Ustded eligió ${equipoElegido} y es un equpo grande`)
}



