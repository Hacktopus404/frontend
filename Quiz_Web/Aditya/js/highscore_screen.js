function back(){
    document.querySelector('.highscore-screen').style.display="none";
    document.querySelector('.start-screen').style.display="flex";
    questionNo=1;
    userChoices = [];
    min = 0;
    sec = 0;
    document.querySelector('.timer').innerText = `Time Elapsed - 0:0`;
}

function clearScore(){
    highscores = [];
    localStorage.clear();
}

let rankHtml=`
        <div class="grid-name" style="text-decoration: underline; margin-bottom: 30px">Name</div>
        <div class="grid-score" style="text-decoration: underline;">Score</div>
        <div class="grid-time" style="text-decoration: underline;">Time</div>
    `;

function rankList(){
    highscores = JSON.parse(localStorage.getItem('highscores'));
    if(localStorage.getItem('highscores')===null){
        rankHtml=`
        <div class="grid-name" style="text-decoration: underline; margin-bottom: 30px">Name</div>
        <div class="grid-score" style="text-decoration: underline;">Score</div>
        <div class="grid-time" style="text-decoration: underline;">Time</div>
        `;
    }
    for (let i = 0; i < (highscores?.length || 0); i++) {
        rankHtml += `
            <div class="grid-name">${highscores[i].name}</div>
            <div class="grid-score">${highscores[i].score}</div>
            <div class="grid-time">${highscores[i].minutes}:${highscores[i].seconds}</div>
        `;
    }
    document.querySelector('.rank-grid').innerHTML = rankHtml;
}

function loadRank(){
    rankHtml=`
        <div class="grid-name" style="text-decoration: underline; margin-bottom: 30px">Name</div>
        <div class="grid-score" style="text-decoration: underline;">Score</div>
        <div class="grid-time" style="text-decoration: underline;">Time</div>
    `;
    rankList();
}