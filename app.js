let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroUsuario === numeroSecreto ){
        asignarTexto('p',`Asertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario > numeroSecreto){
            asignarTexto('p','El número secreto es menor');
        }else{
            asignarTexto('p','El número secreto es mayor');
        }
        intentos++;
        limpiarTexto();
    }
    return;
}
function limpiarTexto(){
    let valorCaja = document.querySelector('#valorUsuario').value = ''; 
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    //Si el número geenrado esta incluido en la lista 
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTexto('p','Ya se sorteron todo los números posibles');

    }else{
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumero();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTexto('h1','Juego del numero secreto!');
    asignarTexto('p',`Indica un número del 1 al 10 {(numeroMaximo)}`);
    numeroSecreto = generarNumero();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarTexto();
    //indicar mensaje de intervalo de números 
    //Generar el numero aleatorio
    //iniciar el número de eventos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();