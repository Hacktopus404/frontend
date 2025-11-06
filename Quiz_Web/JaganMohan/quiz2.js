const questions =[
        {
            question : "What is the smallest bone in the human body?",
            answers : [
                {text:"Rib Bone",solution: false},
                {text:"Nose Bone",solution: false},
                {text:"Ear Bone",solution: true},
                {text:"Knee Bone",solution: false},
            ]
        },
        {
            question : "What is the longest river in the world?",
            answers : [
                {text:"Amazon River",solution: false},
                {text:"Nile River",solution: true},
                {text:"Congo River",solution: false},
                {text:"Parana River",solution: false},
            ]
        },
        {
            question : "Who was the second man to walk on the moon?",
            answers : [
                {text:"Neil Armstrong",solution: false},
                {text:"Jagan Mohan",solution: false},
                {text:"Buzz Aldrin",solution: true},
                {text:"Eugene Cernan",solution: false},
            ]
        },
        {
            question : "What is the name of India's national aquatic animal?",
            answers : [
                {text:"Platanista gangetica(susu)",solution: true},
                {text:"Shark",solution: false},
                {text:"Turtle",solution: false},
                {text:"Swan",solution: false},
            ]
        },
        {
            question : "Which is the second most old university in India?",
            answers : [
                {text:"III VARANASI",solution: false},
                {text:"IIIT GWALIOR",solution: false},
                {text:"IIEST SHIBPUR",solution: true},
                {text:"JNTU ANANTHAPUR",solution: false},
            ]
        },
        {
            question : "Which planet is known as the Red Planet?",
            answers : [
                {text:"Saturn",solution: false},
                {text:"Mars",solution: true},
                {text:"Pluto",solution: false},
                {text:"Earth",solution: false},
            ]
        },
        {
            question : "Which is the smallest state in India by area?",
            answers : [
                {text:"Bihar",solution: false},
                {text:"West Bengal",solution: false},
                {text:"Goa",solution: true},
                {text:"Sikkim",solution: false},
            ]
        },
        {
            question : "What is the hardest natural substance on Earth?",
            answers : [
                {text:"Diamond",solution: true},
                {text:"Graphite",solution: false},
                {text:"Fularins",solution: false},
                {text:"Mild Steel",solution: false},
            ]
        },
        {
            question : "How many acers IIEST Shibpur covers?",
            answers : [
                {text:"80",solution: false},
                {text:"187",solution: false},
                {text:"112",solution: false},
                {text:"123",solution: true},
            ]
        },
        {
            question : "Where is Balaji Temple located",
            answers : [
                {text:"Tamil Nadu",solution: false},
                {text:"Telangana",solution: false},
                {text:"Andhra Pradesh",solution: true},
                {text:"Karnataka",solution: false},
            ]
        },
        
        
    ];
let question=document.querySelector("#question");
let answerbtns=document.querySelectorAll(".btn");
let nextbtn=document.querySelector("#next");
let homebtn=document.querySelector("#home");
let bestscore = document.querySelector("#bestscore")
let gohome=document.querySelector("#gohome");
if (localStorage.getItem('bestscore') === null) {
    localStorage.setItem('bestscore', 0);
}
const best = localStorage.getItem('bestscore');
bestscore.innerText = "Best Score:"+best;
gohome.addEventListener("click",()=>{
    window.open("quiz.html","_self");
});
let score=0;
let scoredis=document.querySelector("#scoredis");
let question_num=0;
nextbtn.style.display="none";
homebtn.style.display="none";
questioncall(question_num);
function questioncall(question_num){
    answerbtns.forEach(btn => {
        btn.style.backgroundColor = "";
        btn.disabled= false;
    });
    nextbtn.style.display = "none";
    let currentquestion = questions[question_num];
    let num = question_num+1;
    question.innerText= num + ". " + currentquestion.question;
    for(let i=0;i<4;i++){
            answerbtns[i].innerHTML=currentquestion.answers[i].text;
    }

}
nextbtn.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
        answerbtns[i].innerHTML = "";
    }
    question_num++;
    if (question_num < questions.length) {
        questioncall(question_num);
    } 
    else {
        question.innerText = `Quiz Completed! Your score: ${score}/${questions.length}`;
        nextbtn.style.display = "none";
        answerbtns.forEach(btn=>{
            btn.style.display = "none";
        })
        if(score>parseInt(localStorage.getItem('bestscore'))){
            bestscore.innerText = "Best Score:"+ score;
            localStorage.setItem('bestscore', score);
        }
        nextbtn.style.display = "none";
        homebtn.style.display = "inline-block";
        homebtn.addEventListener("click",()=>{
            window.open("quiz.html","_self");
        })
    }
});
answerbtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        let correct = questions[question_num].answers[index].solution;
        answerbtns.forEach((b, i) => {
            b.disabled = true;
            if (questions[question_num].answers[i].solution) {
                b.style.backgroundColor = "green";
            }
        });

        if (!correct) {
            btn.style.backgroundColor = "red";
        } else {
            score++;
            scoredis.innerText="score: "+score;
        }

        nextbtn.style.display = "inline-block";
    });
});
