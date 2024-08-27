// app.js

// Función para encriptar el texto
function encrypt() {
    const text = document.getElementById("inputText").value;
    const lowercaseOnly = document.getElementById("lowercaseOnly").checked;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);

        if (lowercaseOnly && char !== char.toLowerCase()) {
            result += char;
        } else {
            // Puedes implementar tu algoritmo de encriptación aquí
            // Ejemplo básico: desplazar caracteres 3 posiciones adelante
            let encryptedChar = String.fromCharCode(char.charCodeAt(0) + 3);
            result += encryptedChar;
        }
    }

    document.getElementById("outputText").value = result;
}

// Función para desencriptar el texto
function decrypt() {
    const text = document.getElementById("inputText").value;
    let result = '';

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        // Invertir el algoritmo de encriptación para desencriptar
        let decryptedChar = String.fromCharCode(char.charCodeAt(0) - 3);
        result += decryptedChar;
    }

    document.getElementById("outputText").value = result;
}

// Función para copiar el texto al portapapeles
function copyToClipboard() {
    const outputText = document.getElementById("outputText");
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
}
