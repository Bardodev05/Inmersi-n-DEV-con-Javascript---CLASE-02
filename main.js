let numeroSecreto = parseInt(Math.random()* 10 + 1)
alert(numeroSecreto)



while (true) {
    let numeroDigitado = prompt("ingresa un numero entre 1 y 10")
    
    if (numeroSecreto == numeroDigitado) {
        alert("acerto")
    } else if (numeroSecreto > numeroDigitado) {
        alert("te equivocaste ... el numero secreto es mayor que le numero digitado")
    } else if (numeroSecreto < numeroDigitado) {
        alert("te equivocaste ... el numero secreto es menor que le numero digitado")
    }
}
