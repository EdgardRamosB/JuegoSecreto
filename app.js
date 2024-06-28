//let titulo = document.querySelector('h1');
// EL DOCUMENT SIRVE PARA HACER PUENTE ENTRE HTML Y JAVA. EL QUERY NOS DICE A LA 
//CANTIDAD DE ELEMETOS Q TeENEMOS EN HTML TE PASO UN NOMBRE "H1" UJN HEAD PRINCIPAL  CAPTURALO Y TRAELO A LA VARIABLE TITULO PERO 
//NO ES UN TEXTO ES UN OBJETO 
//titulo.innerHTML = 'Juego del numero secreto' ;
     
//let parrafo = document.querySelector ('p');
//let parrafo le pido al document, haz el queriseleccion,  selecciona el elemento "p"
//parrafo.innerHTML = 'indica un numero del 1 al 10';
//Ahora, parrafo.innerHTML es una propiedad de ese elemento <p> que nos permite 
//acceder y modificar el contenido interno del párrafo. Específicamente:
let numeroSecreto = 0; //console.log (numeroSecreto); lo pasamos abajo
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto); 
function asignarTextoElemento(elemento, texto){//se ha definido 2 parametros el elemento html 
                                              //que queremos modificar y el texto efectivo
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML = texto ;
     return;                                  // colocar return al terminar una funcion
               //se elimino toda esa declaracion de variable y llamar al document,lo 
          //encapsulo en una funciony luego se invoco la funcion en 2 veces, h1 y para el p
     }
function verificarIntento() { //parseint para convertir el parametro en numero
     let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
   //console.log(intentos);                                    //let numeroDeUsuario = document.querySelector('input');en html llamamos a la funcion que 
   if (numeroDeUsuario === numeroSecreto) {                    //declaramos en java, la funcion es un encapsulado de una accion que queremos q haga
     asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);                                                      //alert ('click desde el boton');
     document.getElementById('reiniciar').removeAttribute('disabled');
    } else{                                                    //console.log(typeof(numeroDeUsuario));
      if(numeroDeUsuario > numeroSecreto){                     //console.log(numeroDeUsuario);para saber si es string texto
       asignarTextoElemento('p','el numero secreto es menor');    //console.log (numeroSecreto);
     } else{ 
       asignarTextoElemento('p','el numero secreto es mayor');

       }
         intentos++;                                              //console.log(typeof(numeroSecreto)); //para saber si es string texto
        limpiarCaja();
        }                                               //console.log(numeroDeUsuario === numeroSecreto);//compara A VS B y devuelve verd. o falso
                                                         //triple = es para ver si son iguales en valor y tipo de dato
   return;
}
function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';


}



function generarNumeroSecreto() { //generarnumerosecreto es el nombre de la funcion, 
 //return Math.floor(Math.random()*numeroMaximo)+1;
 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   //en el parentesis va el parametro

console.log (numeroGenerado);
console.log (listaNumerosSorteados);
//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){
  asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
}else{
if (listaNumerosSorteados.includes(numeroGenerado)){
  return generarNumeroSecreto();
}else{
listaNumerosSorteados.push(numeroGenerado);
return numeroGenerado;
}
    }    //let numeroSecreto = Math.floor (Math.random()*10) + 1;numerosecreto es la variable definida
     //return numeroSecreto; YA NO ES NECESARIO CREAR LA VARIABLE
}
function condicionesIniciales(){
  asignarTextoElemento('h1','juego del numero secreto!');
  asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo} `);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}


function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //indicar mensaje de intervalos de numeros
  //generar el numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //desabilitar el boton de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');

  
}

condicionesIniciales();
