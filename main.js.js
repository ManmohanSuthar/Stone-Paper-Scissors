let userChose = "paper"


let computerInput = Math.floor(Math.random()*8)

if (computerInput <= 0 ) {
    computerInput = "stone";
}else{
    if (computerInput < 2) {
        computerInput = "paper"
    }else{
        if (computerInput < 3 ) {
            computerInput = "scissors"
        }
    }
}

console.log(`Your input =  ${userChose} `);
console.log(`Computer input = ${computerInput}`);


// winner

    if (userChose === "stone" && computerInput === "stone") {
        console.log(`Ohhh Its a tie!`);
    }else{
        if (userChose === "stone" && computerInput === "paper"){
            console.log(`sorry for your loss please try again later!`)
        }else{
            if (userChose === "stone" && computerInput === "scissors") {
                console.log(`yee you are winner !`);
            }else{
                if (userChose === "paper" && computerInput === "paper") {
                    console.log(`Ohhh Its a tie!`);
                }else{
                    if (userChose === "paper" && computerInput === "stone") {
                        console.log(`yee you are winner !`);
                    }else{
                        if (userChose === "paper" && computerInput === "scissors") {
                            console.log(`sorry for your loss please try again later!`)
                        }else{
                            if (userChose === "scissors" && computerInput === "scissors") {
                                console.log(`Ohhh Its a tie!`);
                            }else{
                                if (userChose === "scissors" && computerInput === "paper") {
                                    console.log(`yee you are winner !`);  
                                }else{
                                    if (userChose === "scissors" && computerInput === "stone") {
                                        console.log(`yee you are winner !`); 
                                    }else{
                                        console.log(`your input wrong`);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
        
