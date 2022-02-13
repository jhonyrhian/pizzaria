
// var imagensFontes = [
//     "assets/img/pizza0.jpg",
//     "assets/img/cerveza.jpg",
//     "assets/img/vino.jpeg",
//     "assets/img/tiramisu.jpg",
//     "assets/img/spagetti.jpg",
//     "assets/img/pizzaitaliana.jpg",
//     "assets/img/galaretoespecial.jpg"
// ]

var imagensFontes = [
    [
        "assets/img/pizza0.jpg",
        "assets/img/pizza1.jpg",
        "assets/img/pizza2.webp",
    ],
    [
        "assets/img/cerveza0.jpg",
        "assets/img/cerveza1.jpg",
        "assets/img/cerveza2.jpg",
    ],
    [
        "assets/img/vino0.jpeg",
        "assets/img/vino1.jpg",
        "assets/img/vino2.jpg",
    ],
    [
        "assets/img/sobremesa0.jpg",
        "assets/img/sobremesa1.jpg",
        "assets/img/sobremesa2.jpg",
    ],
    [
        "assets/img/spagetti0.jpg",
        "assets/img/spagetti1.jpg",
        "assets/img/spagetti2.jpg",
    ]
]

var indiceAtual = 0
var indice = 0

var numRand = Math.floor(Math.random() * 3)

function carrossel(){
    document.getElementById("imagem_corrente").setAttribute("src", imagensFontes[indiceAtual][Math.floor(Math.random() * 3)])
}
carrossel()

function hoover(indice){
    indiceAtual = indice
    carrossel()
}

function zoomin(){
    document.getElementById("imagem_corrente").style.filter = "brightness(60%)"
    document.getElementById("imagem_corrente").style.transform = "scale(1.06)"
}

function zoomout(){
    document.getElementById("imagem_corrente").style.filter = "brightness(20%) blur(3px)"
    document.getElementById("imagem_corrente").style.transform = "scale(1)"
}

