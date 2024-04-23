
function ActualizarSaludo() {
    //lee el nombre
    let nodoInput = document.querySelector("#txtNombre");
    console.log(nodoInput);
    let nombre = nodoInput.value;
    //lo muestra en consola (opcional, para debug)
    console.log(nombre);
    //lo muestra en el DOM
    let nodoSaludo = document.getElementById("txtSaludo");
    nodoSaludo.innerHTML = "Hola " + nombre;
}

