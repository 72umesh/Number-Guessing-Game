

// Number Guessing Game

const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*(max-min+1))+min;

let attempts = 0;
let running = true;


let submit = document.getElementById("submit");
let result = document.getElementById("result");


submit.onclick = function(){

    let guess = document.getElementById("myInput").value;

    // let guess = window.prompt(`Enter a Number Between ${min} and ${max}`);
       
    guess = Number(guess);

    if(isNaN(guess)){
        result.textContent= "Please Enter a Valid Number";
    }
    else if(guess < min || guess > max){
        result.textContent = "Please Enter a Valid Number";
    }
    else{
         attempts++;
    
        if(guess < answer){
            result.textContent = "TOO LOW! Try Again";
        }
        else if(guess > answer){
            result.textContent ="TOO HIGH! Try Again";
        }
        else if(guess == answer){
            result.textContent =`Correct! The Answer was ${answer}. It took you a ${attempts} attempts`;
        }
        }
    

}