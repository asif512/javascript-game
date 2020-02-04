
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessleft = 3;

const game = document.querySelector('#game'),
      gameBtn = document.querySelector('#btn-game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message');
      inputValue = document.querySelector('#input-value');

minNum.textContent = min;
maxNum.textContent = max;


// Game Reload
game.addEventListener('mousedown',function(e){    
    if(e.target.classList.contains('play-again')){
        
        window.location.reload();
    }
});

// load Event Listner
gameBtn.addEventListener('click', function(){
    const guess = parseInt(inputValue.value);
    if(isNaN(guess) || guess < min || guess > max){
        errorMessage(`plase enter a no between ${min} and ${max}`, 'red');
    }
    else if(guess === winningNum){
        gameOver(`${winningNum} is correct! YOU WIN`, 'green');
        inputValue.disabled = true;
        inputValue.style.border = '1px solid #000';
    }
    else{
        guessleft -= 1;
        if(guessleft === 0){
            gameOver(`Game over you lose the correct no was ${winningNum}`, 'red');
        }
        else{
            errorMessage(`${guess} is guess wrong! ${guessleft} guess left`, 'green');
        }
    }
    inputValue.value = "";
});

// game over
function gameOver(msg, color){
    message.style.color = color;
    message.textContent = msg;
    inputValue.disabled = true;
    gameBtn.textContent = 'Play Again';
    gameBtn.className += ' play-again';
}

// Error Message
function errorMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Get Random Num
function getRandomNum(min, max){
    return ((Math.floor(Math.random() * max + min)));
}