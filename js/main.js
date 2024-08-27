function jugarAdivinarNumero(){
const numeroAleatorio = Math.floor(Math.random()*100+1);

let intentos = 0;
let adivinado = false;
while(adivinado === false){
    const intento = parseInt(prompt("Intenta adivinar un numero del 1 al 100."));
    intentos ++;

        if(intento === numeroAleatorio){
            alert("Felicitaciones, el numero es "+numeroAleatorio+" y lo adivinaste en el "+intentos+ " intento.");
            adivinado = true;
            
            let quieresJugar = confirm ("¿Quieres jugar nuevamente?");
            if(quieresJugar === true){
                jugarAdivinarNumero();
            }else{
                alert("Muchas gracias por jugar");
            }
        }
            else if (intento<numeroAleatorio){
                alert("El numero es mas grande, sigue intentando");
            }
            else if(intento>numeroAleatorio){
                alert("El numero es mas pequeño, sigue intentando");
            }
            else{
                alert("El numero no es valido, sigue intentando");
            }
        }
    }
jugarAdivinarNumero();