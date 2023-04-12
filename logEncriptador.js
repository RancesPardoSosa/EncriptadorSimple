const btnEncriptar = document.getElementById('btnEncriptar');
const btnDesencriptar = document.getElementById('btnDesencriptar');
const texto = document.getElementById('txtTexto');
const panelInicio = document.getElementById('inicio');
const respuesta = document.getElementById('respuesta');
const btnCopiar = document.getElementById('btnCopiar');

function encriptar(texto) {
    return texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai")
    .replaceAll("o","ober").replaceAll("u","ufat");
}

function desencriptar(texto) {
    return texto.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a")
    .replaceAll("ober","o").replaceAll("ufat","u");
}

btnEncriptar.onclick = ()=>{
    panelInicio.classList.add('hidden-s');
    respuesta.classList.remove('hidden-s');
    btnCopiar.classList.remove('hidden-s');
    respuesta.value = encriptar(texto.value);
    texto.value = "";
}

btnDesencriptar.onclick = ()=>{
    panelInicio.classList.add('hidden-s');
    respuesta.classList.remove('hidden-s');
    btnCopiar.classList.remove('hidden-s');
    respuesta.value = desencriptar(texto.value);
    texto.value = "";
}

btnCopiar.onclick = ()=>{
    respuesta.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    texto.focus()
}