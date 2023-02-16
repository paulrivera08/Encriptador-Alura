var inputIngresartexto = document.querySelector(".ingresarTexto");
var inputTextencriptado = document.getElementById("encriptado");

function encriptar (){
    var ingresarTexto = inputIngresartexto.value;
    var mensajeEncriptado = ingresarTexto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputTextencriptado.value = mensajeEncriptado;
    document.querySelector("#title-1").style.display = "none";
    document.querySelector("#title-2").style.display = "none";
    document.querySelector("#copiar").style.display = "inherit";
    document.querySelector("#encriptado").style.display = "inherit";

}
var btnEncriptar = document.getElementById("encriptar"); btnEncriptar.onclick = encriptar;

function desencriptar (){
    var mensajeEncriptado = inputIngresartexto.value;
    var mensaje  = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputTextencriptado.value = mensaje;
    document.querySelector("#title-1").style.display = "none";
    document.querySelector("#title-2").style.display = "none";
    document.querySelector("#copiar").style.display = "inherit";
    document.querySelector("#encriptado").style.display = "inherit";
}

var btnDesencriptar = document.getElementById("desencriptar"); btnDesencriptar.onclick = desencriptar;

function copiar (){
    var mensajeEncriptado = inputTextencriptado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

var btnCopiar = document.getElementById("copiar"); btnCopiar.onclick = copiar;