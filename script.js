
let turno = true;

let vittorieX = 0;
let vittorieO = 0;
const combinazioni = [
        [0,1,2],
        [3,4,5], 
        [6,7,8], 
        [0,3,6], 
        [1,4,7], 
        [2,5,8], 
        [0,4,8], 
        [2,4,6]  
    ];



function cambiaCell(cella){

    if(turno){

        if(cella.innerText == ""){
            cella.innerText = "X";
            cella.style.color = "red";
            turno = false;
            
        }else{
            alert("Cella gia occupata");
        }


    }else{
        if(cella.innerText == ""){
            cella.innerText = "O";
            cella.style.color = "blue";
            turno = true;
            
        }else{
            alert("Cella gia occupata");
        }
    
    }

    controllaVittoria();
    

}



function controllaVittoria() {

    

    for (let tris of combinazioni) {

        let a = document.getElementById("cell"+tris[0]).innerText;
        let b = document.getElementById("cell"+tris[1]).innerText;
        let c = document.getElementById("cell"+tris[2]).innerText;

        if (a !== "" && a === b && b === c) {

            if (a === "X") {
                vittorieX++;
                document.getElementById("vittorieX").innerText = vittorieX;
            } else {
                vittorieO++;
                document.getElementById("vittorieO").innerText = vittorieO;
            }

            alert("Vittoria di " + a);
            reset();
            break; 
        }
    }

    
    let tuttePiene = true;

    for (let i = 0; i < 9; i++) {
        if (document.getElementById("cell"+i).innerText === "") {
            tuttePiene = false;
            break;
        }
    }

    if (tuttePiene) {
        alert("Pareggio!");
        reset();
        return;
    }

   return;  
}



function reset(){


    for(let i = 0; i < 9; i++){
        document.getElementById("cell"+i).innerText = " ";
    }

    turno = true;

}


function resetPartita(){


    for(let i = 0; i < 9; i++){
        document.getElementById("cell"+i).innerText = " ";
    }
    vittorieO = 0;
    vittorieX = 0;
    document.getElementById("vittorieX").innerText = vittorieX;
    document.getElementById("vittorieO").innerText = vittorieO;
    turno = true;

}