

function tirarDados(numVeces) {

    console.log(numVeces)
    let ganadas = 0;
    for (let index = 0; index < numVeces; index++) {

        let dado1 = Math.floor((Math.random() * 6) + 1);
        let dado2 = Math.floor((Math.random() * 6) + 1);
        //console.log(dado1, dado2);
        document.querySelector('#imgDado1').src = "img/dado" + dado1 + ".png";
        document.querySelector('#imgDado2').src = "img/dado" + dado2 + ".png";

        let total = dado1 + dado2;
        if (total === 8) {
            ganadas++;

        }
    }

    document.querySelector('#resultado').innerHTML = "Ganaste: " + ganadas + " veces";


}

function onBtnClick(event){
    tirarDados(event.target.dataset.veces);
}

document.querySelector('#btnTirar').addEventListener('click', onBtnClick);
document.querySelector('#btnTirarMil').addEventListener('click', onBtnClick);
document.querySelector('#btnTirarVeinte').addEventListener('click', onBtnClick);