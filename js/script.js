let numeri = [];
let numeroSegreto;
let tentativi;

function Istruzioni() {

    document.getElementById("arrow1").classList.toggle("d-none");
    document.getElementById("arrow2").classList.toggle("d-none");

    document.getElementById("istruzioni").classList.toggle("d-none");

}

function gioca() {


    document.getElementById("game").classList.toggle("d-none");
    document.getElementById("game").classList.remove("bg-success");
    document.getElementById("game").classList.remove("bg-danger");
    document.getElementById("game").classList.add("bg-light");
    document.getElementById("risultato").innerHTML = "";
    document.getElementById("NumeriInseriti").innerHTML = "";


    numeroSegreto = Math.floor(Math.random() * 101);
    console.log(numeroSegreto);
    numeri =[];
    document.getElementById("tentativi").innerHTML = 7;
    tentativi = 7;
}

function Indovina() {



    let input = parseInt(document.getElementById("input").value);
    if (numeri[numeri.length - 1] == input) {
        alert("NUMERO GIA INSERITO ... RIPROVA");
    } else {
        numeri.push(input);
        if (input == numeroSegreto) {
            document.getElementById("risultato").innerHTML = "YOU WIN!";
            document.getElementById("game").classList.remove("bg-light");
            document.getElementById("game").classList.add("bg-success");
        } else if (input < numeroSegreto) {
            tentativi--;
            document.getElementById("tentativi").innerHTML = tentativi;
            document.getElementById("suggerimenti").innerHTML = "Il numero che cerchi è più grande";
            document.getElementById("NumeriInseriti").innerHTML = numeri.join(" - ");
        } else if (input > numeroSegreto) {
            tentativi--;
            document.getElementById("tentativi").innerHTML = tentativi;
            document.getElementById("suggerimenti").innerHTML = "Il numero che cerchi è più piccolo";
            document.getElementById("NumeriInseriti").innerHTML = numeri.join(" - ");
        }


        if (tentativi == 0) {
            document.getElementById("risultato").innerHTML = "YOU LOSE - il numero era " + numeroSegreto;
            document.getElementById("game").classList.remove("bg-light");
            document.getElementById("game").classList.add("bg-danger");

        }
    }
}



