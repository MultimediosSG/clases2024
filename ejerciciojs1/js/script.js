function toggle(event) {
    //console.log(event.target.dataset.cedula);
    document.querySelector("body").classList.toggle("prendido");
    
}
// function prender() {
//     document.querySelector("body").classList.add("prendido");
//     document.querySelector("body").classList.remove("apagado");
//     //document.querySelector("#lampara").src = "img/lampara_on.png";
// }
// function apagar() {
//    // document.querySelector("body").classList.remove("prendido");
//     document.querySelector("body").classList.add("apagado");
//     //document.querySelector("#lampara").src = "img/lampara_off.png";
// }

const btnPrender = document.querySelector("#btnPrender");
btnPrender.addEventListener("click", toggle);

document.querySelector("#btnApagar")
    .addEventListener("click", apagar);
