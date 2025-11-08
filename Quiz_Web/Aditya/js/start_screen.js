function startQuiz(){
    document.querySelector('.start-screen').style.display="none";
    document.querySelector('.quiz-screen').style.display="flex";
    document.querySelector('.result-screen').style.display="none";

    questionNoElement.innerText = `Question No. 1`;
    questionElement.innerText = `${questions[0].ques}`;

    let choicesHtml = `
          <label><input type="radio" name="ques1" value="1" class="choice-btn"><span class="choice-opt">${questions[0].opt[0]}</span></label><br>
          <label><input type="radio" name="ques1" value="2" class="choice-btn"><span class="choice-opt">${questions[0].opt[1]}</span></label><br>
          <label><input type="radio" name="ques1" value="3" class="choice-btn"><span class="choice-opt">${questions[0].opt[2]}</span></label><br>
          <label><input type="radio" name="ques1" value="4" class="choice-btn"><span class="choice-opt">${questions[0].opt[3]}</span></label><br>
    `;
    choicesElement.innerHTML = choicesHtml;

    window.sec = 0;
    window.min = 0;
    window.timerId = setInterval(function(){
        if(sec==59){
            min++;
            sec=0;
        }
        else    sec++;

        document.querySelector('.timer').innerText = `Time Elapsed - ${min}:${sec}`;
    }, 1000);
}

function viewHighScore(){
    document.querySelector('.start-screen').style.display="none";
    document.querySelector('.highscore-screen').style.display="flex";
}