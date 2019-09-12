console.log("Welcome to Rock, Paper and Scissors!");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
function handleUsersResponse(response){
    var compChoice = Math.round(Math.random()*2)+1;
    if(response.toUpperCase() === 'ROCK'){
        if(compChoice === 1){
            console.log("Your choice: "+response+"\nComputer choice: Rock");
            console.log("We have a Draw!");
            readline.close();
        }
        else if(compChoice === 2){
            console.log("Your choice: "+response+"\nComputer choice: Paper");
            console.log("Oh no, you LOSE!");
            readline.close();
        }
        else{
            console.log("Your choice: "+response+"\nComputer choice: Scissors");
            console.log("Congratulations, You WIN!");
            readline.close();
        }
    }
    else if(response.toUpperCase() === 'PAPER'){
        if(compChoice === 1){
            console.log("Your choice: "+response+"\nComputer choice: Rock");
            console.log("Congratulations, You WIN!");
            readline.close();
        }
        else if(compChoice === 2){
            console.log("Your choice: "+response+"\nComputer choice: Paper");
            console.log("We have a Draw!");
            readline.close();
        }
        else{
            console.log("Your choice: "+response+"\nComputer choice: Scissors");
            console.log("Oh no, you LOSE!");
            readline.close();
        }
    }
    else if(response.toUpperCase() === 'SCISSORS'){
        if(compChoice === 1){
            console.log("Your choice: "+response+"\nComputer choice: Rock");
            console.log("Oh no, you LOSE!");
            readline.close();
        }
        else if(compChoice === 2){
            console.log("Your choice: "+response+"\nComputer choice: Paper");
            console.log("Congratulations, You WIN!");
            readline.close();
        }
        else{
            console.log("Your choice: "+response+"\nComputer choice: Scissors");
            console.log("We have a Draw!");
            readline.close();
        }
    }
    else{
        console.log("Incorrect choice, please try again!");
        readline.close();
    }
}
readline.question("Please choice either Rock, Paper or Scissors!\n", handleUsersResponse);