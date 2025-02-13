function actualizarContador() {
    const fechaObjetivo = new Date("2025-04-15T23:59:59").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
        document.getElementById("contador").innerHTML = "¡La fecha ha llegado!";
    }
}
setInterval(actualizarContador, 1000);
actualizarContador();
