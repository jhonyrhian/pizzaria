
var imagensFontes = [
    "assets/img/pizza.jpg",
    "assets/img/cerveza.jpg",
    "assets/img/vino.jpeg",
    "assets/img/tiramisu.jpg",
    "assets/img/spagetti.jpg",
    "assets/img/pizzaitaliana.jpg",
    "assets/img/galaretoespecial.jpg"
]

var indiceAtual = 0
var indice = 0

function carrossel(){
    document.getElementById("imagem_corrente").setAttribute("src", imagensFontes[indiceAtual])
}
carrossel()

function hoover(indice){
    indiceAtual = indice
    carrossel()
}