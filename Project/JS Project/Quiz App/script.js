"use strict";

const quizData = [
  {
    questions: "What is the age of Jaimin?",
    a: "10",
    b: "15",
    c: "19",
    d: "25",
    correct: "c",
  },
  {
    questions: "What is the most used programming language?",
    a: "JavaScript",
    b: "Python",
    c: "HTML",
    d: "C++",
    correct: "a",
  },
  {
    questions: "Who is the PM of india in 2020?",
    a: "Rahul Gandhi",
    b: "Narendra Modi",
    c: "Sonia Gandhi",
    d: "Arvind Kejariwal",
    correct: "b",
  },
  {
    questions: "Which year was JavaScript launched?",
    a: "2020",
    b: "2015",
    c: "1995",
    d: "none of the above",
    correct: "c",
  },
  {
    questions: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Notation Object",
    d: "Application Programming Interface",
    correct: "a",
  },
];

let currentQuestions = 0;
let question = document.querySelector("#question");
let a_text = document.querySelector("#a_text");
let b_text = document.querySelector("#b_text");
let c_text = document.querySelector("#c_text");
let d_text = document.querySelector("#d_text");
let ans = 0;
const myForm = document.querySelector("#myForm");
const answ = document.querySelectorAll(".answer");
let score = 0;
let scoreLine = document.querySelector(".quiz-container");

loadQuiz();

function loadQuiz() {
  question.textContent = quizData[currentQuestions].questions;
  a_text.textContent = quizData[currentQuestions].a;
  b_text.textContent = quizData[currentQuestions].b;
  c_text.textContent = quizData[currentQuestions].c;
  d_text.textContent = quizData[currentQuestions].d;
}

document.querySelector("#form-submit").addEventListener("click", () => {
  if (myForm.answer.value == "") alert("select the answer");
  else {
    ans = myForm.answer.value;
    if (ans == quizData[currentQuestions].correct) score++;
    console.log(score);
    currentQuestions++;

    if (currentQuestions < quizData.length) {
      loadQuiz();

      answ.forEach((answer) => {
        answer.checked = false;
      });
    } else {
      scoreLine.innerHTML = `<h1 class="score-line"> Your score is ${score} / ${quizData.length}</h1>
      <button class="btn" onclick="location.reload()">Reset Quiz</button>`;
    }
  }
});
