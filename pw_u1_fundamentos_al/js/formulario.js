function guardar(){
    validarCampos();
}

function validarCampos() {
    let nombre=document.getElementById("id_nombre").value;
    let id_apellido=document.getElementById("id_apellido").value;
    let fecha=document.getElementById("id_fecha").value;
    let password=document.getElementById("id_password").value;
    let email=document.getElementById("id_email").value;
   /* if (nombre==="" ||email==="") {
        mostrarAsterisco('id_error_nombre');
        mostrarMensaje('Nombre obligatorio');
        
        return;
    }*/
    if(email===""){
        mostrarAsterisco('id_error_email');
        mostrarMensaje('Email obligatorio');   
    }else{
       let c= validarEmail(email);
        if(c===false){
            mostrarMensaje('email incorrecto');
        }
    }

    
}

function mostrarMensaje(msg) {
    let mensaje=document.getElementById('id_msg_error');
    mensaje.innerText= msg;
    mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento){
    document.getElementById(idElemento).innerText='*';
}

function limpiarMensaje() {
    let mensaje=document.getElementById('id_msg_error');
    mensaje.innerText= "";
    mensaje.style.display = "none";

    const errorAsterisco= document.querySelectorAll('.error_asterisco');
    errorAsterisco.forEach(e =>e.innerText='');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}