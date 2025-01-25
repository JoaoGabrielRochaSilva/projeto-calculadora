
function clicou(num) {
    document.getElementsByClassName('res')[0].innerHTML += num
}

function reset() {
    document.getElementsByClassName('res')[0].innerHTML = ''
}

function back() {
    var resultado = document.getElementsByClassName('res')[0].innerHTML
    document.getElementsByClassName('res')[0].innerHTML = resultado.substring(0, resultado.length - 1)
}

function operação() {
    var resultado = document.getElementsByClassName('res')[0].innerHTML
    if (resultado.length != 0){
        document.getElementsByClassName('res')[0].innerHTML = eval(resultado)
    } else {
        resultado = ''
    }
}