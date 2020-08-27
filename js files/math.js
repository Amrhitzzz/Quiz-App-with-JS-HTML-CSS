// create questions here
let questions = [
    new Question(" All natural numbers and 0 are called the ……………….. numbers.", ["Whole", "prime","integer", "rational"], 0),
    new Question("The wages of 10 workers for a six-day week is $ 1200. What are the one day’s wages of 4 workers?", ["$40", "$24", "$80", "$32"],2),
    new Question("Which of the following numbers gives 240 when added to its own square?", ["15", "18","20", "16"], 0),
    new Question("A clock strikes once at 1 o’clock, twice at 2 o’clock, thrice at 3 o’clock and so on. How many times will it strike in 24 hours?", ["78", "196", "156", "136"],2),
    new Question("A car can cover a distance of 522 km on 36 liters of petrol. How far can it travel on 14 liters of petrol?", ["213 km", "223 km", "203 km", "302 km"],2)
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
