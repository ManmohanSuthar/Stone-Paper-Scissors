let winner = document.getElementById("winner");


function stone(){

    let stonegame = "stone";
    
    let computerInput = Math.floor(Math.random()*5)
    
    if (computerInput <= 0 ) {
        computerInput = "stone";
    }else{
        if (computerInput <= 3) {
            computerInput = "paper"
        }else{
            if (computerInput > 3 ) {
                computerInput = "scissors"
            }
        }
    }
    
    if (stonegame === "stone" && computerInput === "stone") {
        document.getElementById("yourchose").innerHTML = "You Choose stone";
        document.getElementById("compurtinput").innerHTML = "Computer Choose Stone";
        document.getElementById("winner").innerHTML = "Ohh Tie !";
        document.getElementById("winner").style.color ="#3CE892"


    }else if (stonegame === "stone" && computerInput === "paper") {
        document.getElementById("yourchose").innerHTML = "You Choose stone";
        document.getElementById("compurtinput").innerHTML = "Computer Choose Paper"
        document.getElementById("winner").innerHTML = "You Win";
        document.getElementById("winner").style.color ="#3CE892"



    }else if (stonegame === "stone" && computerInput === "scissors" ) {
        document.getElementById("yourchose").innerHTML = "You Choose stone";
        document.getElementById("compurtinput").innerHTML = "Computer Choose scissors "
        document.getElementById("winner").innerHTML = "You Loss";
        document.getElementById("winner").style.color ="#FF5359"
    }  
};


function paper(){

    let papergame = "paper";
    
    let computerInput = Math.floor(Math.random()*5)
    
    if (computerInput <= 0 ) {
        computerInput = "stone";
    }else{
        if (computerInput <= 3) {
            computerInput = "paper"
        }else{
            if (computerInput > 3 ) {
                computerInput = "scissors"
            }
        }
    }
    
    if (papergame === "paper" && computerInput === "paper") {
        document.getElementById("yourchose").innerHTML = "You Choose paper";
        document.getElementById("compurtinput").innerHTML = "Computer Choose paper";
        document.getElementById("winner").innerHTML = "Ohh Tie !";
        document.getElementById("winner").style.color ="#3CE892"


    }else if (papergame === "paper" && computerInput === "scissors") {
        document.getElementById("yourchose").innerHTML = "You Choose paper";
        document.getElementById("compurtinput").innerHTML = "Computer Choose scissors"
        document.getElementById("winner").innerHTML = "You Win";
        document.getElementById("winner").style.color ="#3CE892"



    }else if (papergame === "paper" && computerInput === "stone" ) {
        document.getElementById("yourchose").innerHTML = "You Choose paper";
        document.getElementById("compurtinput").innerHTML = "Computer Choose stone "
        document.getElementById("winner").innerHTML = "You Loss";
        document.getElementById("winner").style.color ="#FF5359"
    } 
}; 

function scissors(){

    let scissorsgame = "scissors";
    
    let computerInput = Math.floor(Math.random()*5)
    
    if (computerInput <= 0 ) {
        computerInput = "stone";
    }else{
        if (computerInput <= 3) {
            computerInput = "paper"
        }else{
            if (computerInput > 3 ) {
                computerInput = "scissors"
            }
        }
    }
    
    if (scissorsgame === "scissors" && computerInput === "scissors") {
        document.getElementById("yourchose").innerHTML = "You Choose scissors";
        document.getElementById("compurtinput").innerHTML = "Computer Choose scissors";
        document.getElementById("winner").innerHTML = "Ohh Tie !";
        document.getElementById("winner").style.color ="#3CE892"


    }else if (scissorsgame === "scissors" && computerInput === "paper") {
        document.getElementById("yourchose").innerHTML = "You Choose scissors";
        document.getElementById("compurtinput").innerHTML = "Computer Choose Paper"
        document.getElementById("winner").innerHTML = "You Win";
        document.getElementById("winner").style.color ="#3CE892"



    }else if (scissorsgame === "scissors" && computerInput === "stone" ) {
        document.getElementById("yourchose").innerHTML = "You Choose scissors";
        document.getElementById("compurtinput").innerHTML = "Computer Choose stone "
        document.getElementById("winner").innerHTML = "You Loss";
        document.getElementById("winner").style.color ="#FF5359"
    } 
};

