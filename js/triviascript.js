let intentos = 3
let opcionCorrecta = document.getElementById('op4')

function ocultar(){
    document.getElementById('btn2').style.display="none"
}

ocultar()

function mostrar(){
    document.getElementById('btn2').style.display="block"
}

function volverAJugar(){            
            window.location.reload(true)    
        }

function adivinar(){
    for(i= 0; i == 0; i--){
        intentos--
        respuesta = document.getElementById('respuesta')
        respuesta.innerHTML = 'Intentos restantes: ' + intentos
    }
    
    if(opcionCorrecta.checked){
        alert('Ganaste capo!')
        window.location.reload(true)
    }
    
    if(intentos == 2){
        pistas = document.getElementById('pistas')
        pistas.innerHTML = 'Te tiro una primer pista'
        }
        else if(intentos == 1){
            pistas = document.getElementById('pistas')
            pistas.innerHTML = 'Te tiro una segunda pista'
        }
        else if(intentos == 0){
            respuesta = document.getElementById('respuesta')
            respuesta.innerHTML = ""
            pistas = document.getElementById('pistas')
            pistas.innerHTML = 'Perdiste hermano'
            mostrar()
        }
          else if(intentos < 0){
            respuesta = document.getElementById('respuesta')
            respuesta.innerHTML = ""
            mostrar()
          }
        else{
            null
        }
}