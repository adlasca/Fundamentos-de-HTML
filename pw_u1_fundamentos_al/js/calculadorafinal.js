let num1=0;
let num2=0;

function mostrarDisplay(valor) {
    let elemento=document.getElementById('display');
    elemento.innerText =elemento.innerText+ valor;
}

function sumar(n1,n2) {
    return n1+n2;
    
}

function restar(n1,n2) {
    return n1-n2;
}

function multiplicar(n1,n2) {
    return n1*n2;
}

function dividir(n1,n2) {
    return n1/n2;
}

function porcentaje(n1,n2) {
    return n1%n2;
}

function borrar(params) {
    let elemento=document.getElementById('display');
    elemento.innerText = 0;
}

function retroceso(params) {
    
}

function evaluarOperacion(tipo) {
    num1 = parseFloat(document.getElementById('display').value);
    num2 = parseFloat(document.getElementById('display').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }
    document.getElementById('display').innerText = resultado;
}