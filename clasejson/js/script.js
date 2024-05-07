let tabla = [
    {
        "nombre": "Real Madrid",
        "puntos": 98,
        "pj": 35,
        "pg": 32,
        "pe": 2,
        "pp": 1
    },
    {
        "nombre": "Getafe",
        "puntos": 90,
        "pj": 35,
        "pg": 30,
        "pe": 3,
        "pp": 2
    },
    {
        "nombre": "Barcelona",
        "puntos": 85,
        "pj": 35,
        "pg": 25,
        "pe": 5,
        "pp": 5
    },
    {
        "nombre": "Atletico de Madrid",
        "puntos": 80,
        "pj": 35,
        "pg": 20,
        "pe": 5,
        "pp": 10
    },
    {
        "nombre": "Valencia",
        "puntos": 75,
        "pj": 35,
        "pg": 15,
        "pe": 5,
        "pp": 15
    },
]

console.table(tabla[0]);
console.log("Cantidad de equipos:", tabla.length);

const diferencia = tabla[0].puntos - tabla[1].puntos;

document.querySelector('#diferencia').innerHTML = `Diferencia entre ${tabla[0].nombre} y ${tabla[1].nombre} es de ${diferencia} puntos`;





