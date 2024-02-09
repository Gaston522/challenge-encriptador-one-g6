const textoArea = document.querySelector(".textA");

function encriptarDesencriptar(op) {//Funcion que encripta o desencripta dependiendo del valor de su parametro
    if (textoArea.value != "") {
        if (op === "encriptar") {//Encripta usando el metodo .replaceAll para reemplazar las vocales por las frases encriptadoras
            document.querySelector(".parrafo").innerText = textoArea.value.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
        }else if(op == "desencriptar"){//Desencripta utilizando el mismo metodo pero invirtiendo el proceso
            document.querySelector(".parrafo").innerText = textoArea.value.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
        }
        document.querySelector(".container-img").style.display = "none";//Se oculta el container-img
        document.querySelector(".container-p").style.display = "flex";//Se muestra el container-p
    }
}

function bCopiar() {
    navigator.clipboard.writeText(document.querySelector(".parrafo").innerText).then(()=>{//Copia usando un metodo que devuelve una promesa
        alert("Mensaje copiado");//Si copia muestra el mensaje y reseta los valores del textArea, container-img y container-p
        document.querySelector(".textA").value = "";
        document.querySelector(".container-img").style.display = "flex";
        document.querySelector(".container-p").style.display = "none";
        
    }).catch(()=>alert("No se pudo copiar el mensaje"));//Si no pudo copiar, muestra el mensaje
}

function validarTexto() {
        // Filtrar caracteres no deseados usando una expresión regular
        textoArea.value = textoArea.value.replace(/[^a-z\s]/g, '');
    
}