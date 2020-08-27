// create questions here
let questions = [
    new Question("Longhorn was the code name of ?", ["Windows10", "Windows7","Windowsxp", "Windows Vista"], 3),
    new Question("Do no evil' is tag line of ......?", ["google", "facebook", "yahoo", "nimbuzz"], 0),
    new Question("World's first microprocessor is .....?", ["Intel 1200", "Intel 1404","Intel 1402", "Intel 4004"], 3),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], 0),
    new Question("When was the first smart phone launched?", ["1999", "1990", "1992", "2000"], 2)
];
var i = 0;
var SCORES = 0 ;



function Question(question, options, answer) {
    this.question = question;
    this.options = options
    this.answer = answer
}



function init() {
    let container = document.getElementsByClassName('container')[0];

    let question = document.createElement("div");
    question.setAttribute("id", "question");

    let h1 = document.createElement("h1");
    h1.textContent = i+1 + " ";
    h1.innerHTML += questions[i].question;
    
    question.appendChild(h1);

    container.appendChild(question);
   
    for(let j=0; j<4; j++){

        let container = document.getElementsByClassName("container")[0];
        let answer_holder = document.createElement("div");
        answer_holder.setAttribute("class", "answer-holder")

        let answers = document.createElement("div");
        answers.onclick = showmeindex
        answers.setAttribute("class", "answers");
        

        let p1 = document.createElement("p");
        p1.setAttribute("class", "choice");
        p1.textContent = j+1;
        let p2 = document.createElement("p");
        p2.setAttribute("class", "choice-answer");
        p2.setAttribute("id", "choice-"+ i +"-" + j)
        p2.textContent = questions[i].options[j]
        answers.appendChild(p1)
        answers.appendChild(p2)

        answer_holder.appendChild(answers)
        
        container.appendChild(answer_holder);

        function showmeindex(event){
            let index = event.target.id.split("-")
            let ques = index[1]
            let ans = index[2]

 


            console.log("question no: ",ques,"You choose:", ans)
            console.log("correct answer:", questions[i].answer)
            if (ans==questions[i].answer){
                SCORES += 5;
                console.log("you have: ", SCORES, "points")
                console.log("congratue")
                let correct = document.getElementsByClassName("choice")[ans];
                correct.style.background = "green"
            }else{
                console.log("wrong answer!")
                let wrong = document.getElementsByClassName("choice")[ans];
                wrong.style.background = "red"
            }
        }

        

    }

    if (i < 4){
        let button = document.createElement("button");
    
        button.setAttribute("class", "btn")
        button.textContent = "Next"
        container.appendChild(button)
    
        button.onclick = nextQuestion
    }else{
        let button = document.createElement("button");
    
        button.setAttribute("class", "btn")
        button.textContent = "Show Scores"
        container.appendChild(button)
        button.onclick = showScores
    }
    
    function nextQuestion(e){
        container.innerHTML = ""
        i++;
        init()
    }

    function showScores(){
        let container = document.getElementsByClassName('container')[0];
        container.innerHTML = ""
        let h2 = document.createElement("h2");
        h2.textContent = "Your score is: "
        h2.textContent += SCORES
        container.appendChild(h2)

        let button = document.createElement("button");
        button.setAttribute("class", "btn")
        let a = document.createElement("a")
        a.setAttribute("href", "/index.html")
        a.innerHTML = "Play Again"
        button.appendChild(a)
        container.appendChild(button)
    }

}

init()
