var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ]

var main = document.getElementById("main");
var opt = document.getElementById("options");
var ques = document.getElementById("questionss");
var currQues = document.getElementById("currQues");
var totalQues = document.getElementById("totalQues");

var userMarks = document.getElementById("displayMarks");
var dispStatus = document.getElementById("displayStatus");
var percentage = document.getElementById("displayPercentage");
var grade = document.getElementById("displayGrade");
var result = document.getElementById("lastResult");

let index = 0;
let marks = 0;

function displayFunc(){
    totalQues.innerHTML = questions.length;
    currQues.innerHTML = index + 1;
    ques.innerHTML = questions[index].question;
    
    opt.innerHTML = "";
    
    for(var i = 0; i < questions[index].options.length; i++){
        opt.innerHTML += `
        <div class="col-6 text-center">
            <button type="button" class="opt-btn"
            onclick="setAnswer('${questions[index].options[i]}' , '${questions[index].correctAns}')">
            ${questions[index].options[i]}
            </button>
        </div>
        ` 
    }
}
displayFunc();

function nextOpt(){
    if(index + 1 == questions.length){
        result.style.display = "block";
        main.style.display = "none";

        var totalMarks = questions.length;

        var userPercentage = (marks / totalMarks) * 100;
        userMarks.innerHTML = marks;
        percentage.innerHTML = userPercentage.toFixed() + "%";

        if(userPercentage > 79){
            grade.innerHTML = "A+";
          }
          if(userPercentage <= 70 ){
            grade.innerHTML = "B";
          } 
          if(userPercentage <= 59 ){
            grade.innerHTML ="C";
          }
          if (userPercentage <= 50) {
            dispStatus.innerHTML = "Fail";
            grade.innerHTML = "F";
          }
          else {
            dispStatus.innerHTML = "Pass";
          }
        }
        else {
            index++
            displayFunc();            
        }
}

function setAnswer(x,y){
  if(x == y){
    marks++
  }
  nextOpt();
}

function playAgain(){
  result.style.display = "none";
  main.style.display = "block"; 
  restartBtn();
}

function restartBtn(){
  index = 0;
  marks = 0
  currQues.innerHTML = 1;
  displayFunc();
}

function resetGame(){
  restartBtn();
}
