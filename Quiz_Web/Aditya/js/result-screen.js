window.highscores = [];

function restart(){
    document.querySelector('.result-screen').style.display="none";
    document.querySelector('.start-screen').style.display="flex";
    questionNo=1;
    userChoices = [];
    document.querySelector('.nxt-btn').innerText = 'Next';
}

function viewHighScoreResult(){
    document.querySelector('.result-screen').style.display="none";
    document.querySelector('.highscore-screen').style.display="flex";
}

function saveScore(){
    window.playerName = document.querySelector('.nameInput').value;
    if(playerName===""){
        document.querySelector('.toast').style.opacity = 1;
        setTimeout(function(){document.querySelector('.toast').style.opacity = 0},2500);
        return;
    }
    window.highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({name: playerName, score: score, minutes: min, seconds: sec});
    document.querySelector('.nameInput').value = '';
    localStorage.setItem("highscore", JSON.stringify(highscores));
    viewHighScoreResult();
}