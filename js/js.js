
/* funcion para que aparezca texto oculto del trabajo: McDonalds  */

document.getElementById('btn-mc').addEventListener('click', mostrarTextoMc);

function mostrarTextoMc () {
    document.getElementById('text-mc').style.display = 'block';
    document.getElementById('text-contador').style.display = 'none';
    document.getElementById('text-auto').style.display = 'none';
    document.getElementById('text-inmobiliaria').style.display = 'none';


    console.log("prueba MC");
}

/* funcion para que aparezca texto oculto del trabajo: contador  */

document.getElementById('btn-contador').addEventListener('click', mostrarTextoContador);

function mostrarTextoContador () {
    document.getElementById('text-mc').style.display = 'none';
    document.getElementById('text-contador').style.display = 'block';
    document.getElementById('text-auto').style.display = 'none';
    document.getElementById('text-inmobiliaria').style.display = 'none';

    console.log("prueba contador");
}

/* funcion para que aparezca texto oculto del trabajo: concesionario  */

document.getElementById('btn-auto').addEventListener('click', mostrarTextoAuto);

function mostrarTextoAuto () {
    document.getElementById('text-mc').style.display = 'none';
    document.getElementById('text-contador').style.display = 'none';
    document.getElementById('text-auto').style.display = 'block';
    document.getElementById('text-inmobiliaria').style.display = 'none';

    console.log("prueba MB");
}

/* funcion para que aparezca texto oculto del trabajo: inmobiliaria  */

document.getElementById('btn-inmobiliaria').addEventListener('click', mostrarTextoInmobiliaria);

function mostrarTextoInmobiliaria () {
    document.getElementById('text-mc').style.display = 'none';
    document.getElementById('text-contador').style.display = 'none';
    document.getElementById('text-auto').style.display = 'none';
    document.getElementById('text-inmobiliaria').style.display = 'block';

    console.log("prueba REMAX");
}

/* CAMBIO DE FONDO CON SCROLL */

function cambiarBg(){
    var scrollValue = window.scrollY ;
    console.log (scrollValue);

    if (scrollValue < 1000){
        document.body.style.backgroundColor='#FFFFFF';
    }
         
    else if (scrollValue < 2000){
        document.body.style.backgroundColor='#FFFAFA';
    }
    else if (scrollValue < 2900){
        document.body.style.backgroundColor='#FDF5E6';
    }
    else if (scrollValue < 3300){
        document.body.style.backgroundColor='#FAFBFD';
    }
    else{
        document.body.style.backgroundColor='#F5FFF0';
    }
}

window.addEventListener('scroll', cambiarBg);


