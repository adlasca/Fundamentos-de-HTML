let num1 = null;
let num2 = null;
let operador = null;
let nuevaEntrada = true;

function mostrarDisplay(valor) {
    const elemento = document.getElementById('display');
    if (nuevaEntrada || elemento.innerText === '0') {
        elemento.innerText = valor;
        nuevaEntrada = false;
    } else {
        elemento.innerText = elemento.innerText + valor;
    }
}

function agregarDecimal() {
    const elemento = document.getElementById('display');
    if (nuevaEntrada) {
        elemento.innerText = '0.';
        nuevaEntrada = false;
        return;
    }
    if (!elemento.innerText.includes('.')) {
        elemento.innerText = elemento.innerText + '.';
    }
}

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

function porcentaje(n1,n2) {
    return (n1*n2/100);
}

function borrar(params) {
    let elemento = document.getElementById('display');
    elemento.innerText = '0';
    num1 = null;
    num2 = null;
    operador = null;
    nuevaEntrada = true;
}

function retroceso(params) {
    let elemento = document.getElementById('display');
    if (elemento.innerText.length <= 1) {
        elemento.innerText = '0';
        nuevaEntrada = true;
    } else {
        elemento.innerText = elemento.innerText.slice(0, -1);
    }
}

function evaluarOperacion(tipo) {
    let elemento = document.getElementById('display');
    if (tipo === '+' || tipo === '-' || tipo === '*' || tipo === '/' || tipo === '%') {
        num1 = parseFloat(elemento.innerText);
        operador = tipo;
        nuevaEntrada = true;
        return;
    }

    if (tipo === '=') {
        if (operador == null || num1 == null) {
            return; 
        }
        num2 = parseFloat(elemento.innerText);
        let resultado = 0;
        if (operador === '+') {
            resultado = sumar(num1, num2);
        } else if (operador === '-') {
            resultado = restar(num1, num2);
        } else if (operador === '*') {
            resultado = multiplicar(num1, num2);
        } else if (operador === '/') {
            resultado = dividir(num1, num2);
        } else if (operador === '%') {
            resultado = porcentaje(num1, num2);
        }
        elemento.innerText = resultado;
        num1 = resultado;
        operador = null;
        nuevaEntrada = true;
    }
}