var textEncriptar=document.querySelector(".texto_1");
const mensaje=document.querySelector('.texto_2');

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const encriptado=encriptar(textEncriptar.value);
    textEncriptar.value='';
    mensaje.value=encriptado;
    
}

function btnDesencriptar(){
   
    const texto=desencriptar(textEncriptar.value);
    textEncriptar.value='';
    mensaje.value=texto;
    }


function copiarTexto(){
    navigator.clipboard.writeText(mensaje.value)
    .then(() => {
        console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
    })
    }


function encriptar(){
    text=textEncriptar.value.toLowerCase();
    let encriptada=text.replace(/e/g,'enter')
                .replace(/i/g,'imes')
                .replace(/a/g,'ai')
                .replace(/o/g,'ober')
                .replace(/u/g,'ufat');
    return encriptada
}

function desencriptar(){
    text=mensaje.value.toLowerCase();
    let desencriptada=text.replace(/enter/g,'e')
                .replace(/imes/g,'i')
                .replace(/ai/g,'a')
                .replace(/ober/g,'o')
                .replace(/ufat/g,'u');
    return desencriptada
}

textEncriptar.addEventListener('input', function () {
    let text_input = textEncriptar.value;
    // Convertir a minúsculas y quitar caracteres no permitidos
    text_input = text_input.toLowerCase().replace(/[^a-z\s]/g, '');
    textEncriptar.value = text_input;
});

function limpiar(){
    textEncriptar.value='';
    mensaje.value='';
}