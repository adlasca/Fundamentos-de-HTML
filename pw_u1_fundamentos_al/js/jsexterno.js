function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;
}

function agregarElemeto(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}
function construirH1(params) {
    return '<h1 id="id_calculadora">Calculadora</h1>'
}
function eliminarElemento(idElemento) {
    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}

function evaluarOperacion(tipo) {
    let num1=parseFloat(document.getElementById('id_n1').value);
    let num2=parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo==='+') {
        resultado=sumar(num1,num2);
    }
    if (tipo==='-') {
        resultado=restar(num1,num2);
    }
    if (tipo==='*') {
        resultado=multiplicar(num1,num2);
    }
    if (tipo==='/') {
        resultado=dividir(num1,num2);
    }
    document.getElementById('id_resultado').innerText=resultado;
}

function fundamentosJS(){
    /*-----Tipos de variables-----*/
    var nombre ="Pedro" ; // Variable Obsoleta
    let apellido = "Lora"; // Variables cambiantes
    //Tipado dinámico: no se necesita declarar el tipo de dato, se puede cambiar de tipo de dato exm: String a Int
    let apellido2=15;
    let arreglo = [1,2,3,4,5,6]
    let diaSemana = ['lunes','martes', '...']
    //Constante
    const iva=0.15;
    console.log('lol');
    console.log(nombre);
    console.log(arreglo);
    console.log(diaSemana);
    //Manejo de arreglos
    const arreglo1=[1,2,3];
    arreglo1.push(3);
    //Agrega al final
    console.log(arreglo1);
    arreglo1.unshift('Num');
    //Agrega al inicio de la lista
    console.log(arreglo1);
    console.log(arreglo1[0]);
    console.log('Manejo de nulos,undefined y vacio');
    arreglo1.push(null);
    arreglo1.push('');
    console.log(arreglo1[5])
    console.log(arreglo1[6])
    console.log(arreglo1[7])
    const numerosPares=[2,4,6,8];
    const numerosImpares=[1,3,5,7,9];
    const numerosTotales=numerosImpares.concat(numerosPares);
    console.log(numerosTotales);
    
    /*-----Sentencias de Control-----*/
    let edad =17;
    if(edad >=18){
        console.log('Es mayor de edad');
    }else{
        console.log('Es menor de edad');
    }

    let dia = 'maretes';
    switch(dia){
        case 'lunes':
            console.log('Es lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default:
            console.log('No es ni lunes ni martes');
    }
    for(let i=0; i<=5;i++){
        console.log(i);
    }

    const frutas =['pera', 'sandia','manzana', 'papaya'];
    for(let fruta of frutas){
        console.log(fruta);
    }

    /*-----MANEJO DE OBJETOS-----*/
    const profesor={
        nombre: 'Pepe',
        apellido: 'Lavat',
        edad: 35,
        ecuatoriano: true,
        genero: 'M',
        ciudad:'Quito'
        
    }
    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido='Cuacacha';
    console.log(profesor);

    if(profesor.ciudad === 'Quito'){
        console.log('Es quiteño')
    }
    if(profesor.edad !==36){
        console.log('Es diferente de 36')
    }else{
        console.log('Es 36')
    }

    for(let clave in profesor){
        console.log(clave)
        console.log(profesor[clave])
    }
}