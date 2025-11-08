window.questionNo = 1;     
let questionNoElement = document.querySelector('.question-no')
let questionElement = document.querySelector('.question');
let choicesElement = document.querySelector('.choices')
let checkBtn = true;
window.userChoices = [];

function nextQues(){
    //Logic for last question (Submitting)
    if(questionNo===questions.length){
        document.querySelector('.quiz-screen').style.display="none";
        document.querySelector('.result-screen').style.display="flex";
        currScore();
        clearInterval(timerId);
        return;
    }

    //Changing next to submit btn logic
    if(questionNo===questions.length-1){
        document.querySelector('.nxt-btn').innerText = 'Submit';
    }

    // //Logic to bring Prev Button
    // if(questionNo!==0)
    //     document.querySelector('.prev-btn').style.display = "inline";

    questionNoElement.innerText = `Question No. ${questionNo+1}`;
    questionElement.innerText = `${questions[questionNo].ques}`;

    let choicesHtml = `
          <label><input type="radio" name="ques${questionNo+1}" value="1" class="choice-btn"><span class="choice-opt">${questions[questionNo].opt[0]}</span></label><br>
          <label><input type="radio" name="ques${questionNo+1}" value="2" class="choice-btn"><span class="choice-opt">${questions[questionNo].opt[1]}</span></label><br>
          <label><input type="radio" name="ques${questionNo+1}" value="3" class="choice-btn"><span class="choice-opt">${questions[questionNo].opt[2]}</span></label><br>
          <label><input type="radio" name="ques${questionNo+1}" value="4" class="choice-btn"><span class="choice-opt">${questions[questionNo].opt[3]}</span></label><br>
    `;
    choicesElement.innerHTML = choicesHtml;

}

function nextClick(){
    if(checkBtn===true){
        checkBtn = false;
        let selected = document.querySelector(`input[name="ques${questionNo}"]:checked`);
        if (selected) {
            userChoices.push(parseInt(selected.value));
        } 
        else    userChoices.push(0);
        document.querySelectorAll('.choice-btn').forEach(radio => {radio.disabled = true;});
        if(userChoices[userChoices.length-1]===0){
            document.querySelector('.insta-ans').style.visibility = 'visible';
            document.querySelector('.insta-ans').innerText = 'Unattempted!';
        }
        else if(userChoices[userChoices.length-1]===questions[questionNo-1].ans){
            document.querySelector('.insta-ans').style.visibility = 'visible';
            document.querySelector('.insta-ans').innerText = '✔️Correct!';
        }
        else{
            document.querySelector('.insta-ans').style.visibility = 'visible';
            document.querySelector('.insta-ans').innerText = '❌Incorrect!';
        }
        document.querySelector('.nxt-btn').innerText = 'Next';
    }
    else{
        nextQues();
        document.querySelector('.insta-ans').style.visibility = 'hidden';
        document.querySelector('.insta-ans').innerText = '';
        document.querySelector('.nxt-btn').innerText = 'Check';
        checkBtn = true; 
        questionNo++;
    }
}

// function prevQues(){
//     if(questionNo===2){
//         document.querySelector('.prev-btn').style.display = 'none';
//     }

//     questionNo-=2;

//     //Submit Button logic reverted
//     if(questionNo===questions.length-3){
//         document.querySelector('.nxt-btn').innerText = 'Next';
//     }

//     nextQues();
// }