let intentos = 3
let opcionCorrecta = document.getElementById('op4')

function ocultarBtn1(){
    document.getElementById('btn1').style.display="none"
}

function ocultarBtn2(){
    document.getElementById('btn2').style.display="none"
}

ocultarBtn2()

function mostrar(){
    document.getElementById('btn2').style.display="block"
}


function volverAJugar(){            
            window.location.reload(true)    
        }

function adivinar(){
    for(i= 0; i == 0; i--){
        intentos--
        // respuesta = document.getElementById('respuesta')
        // respuesta.innerHTML = 'Intentos restantes: ' + intentos
    }
    
    if(opcionCorrecta.checked){
        alert('Ganaste capo!')
        window.location.reload(true)
        return
    }
    
    if(intentos == 2){
        // pistas = document.getElementById('pistas')
        // pistas.innerHTML = 'Te tiro una primer pista'
        alert('Ups. Un ayudita: PHP no entra en el podio')
        }
        else if(intentos == 1){
            // pistas = document.getElementById('pistas')
            // pistas.innerHTML = 'Te tiro una segunda pista'
        alert('Ups otra vez. Última pista: "Jokers\'s Path Joins Carefully#"')
        }
        else if(intentos == 0){
            // respuesta = document.getElementById('respuesta')
            // respuesta.innerHTML = ""
            // pistas = document.getElementById('pistas')
            alert('Game over! Podés volver a intentar cuantas veces quieras.')
            mostrar()
            ocultarBtn1()
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