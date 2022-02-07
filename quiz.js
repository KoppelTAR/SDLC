const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
function buildQuiz(){}

function showResults(){}

// display quiz right away


// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
       question: "Which sdlc models is the oldest?",
       answers: {
         a: "Prototyping",
         b: "Waterfall",
         c: "Iterative"
      },
      correctAnswer: "b"
    },
    {
       question: "Which sldc model is used for risk managment?",
       answers: {
         a: "V-shape",
         b: "Agile",
         c: "Spiral"
      },
      correctAnswer: "c"
    },
    {
        question: "What does the V in V-shape model stand for?",
        answers: {
          a: "Verification and Validation",
          b: "Vegetable",
          c: "Volcano"
        },
        correctAnswer: "a"
      },
    {
        question: "How many stages does the waterfall model have?",
        answers: {
          a: "4",
          b: "3",
          c: "6"
        },
        correctAnswer: "c"
    },
    {
        question: "What kind of prototypes are made in the prototyping model for the client?",
        answers: {
          a: "High quality prototypes",
          b: "Low fidelity prototypes",
        },
        correctAnswer: "b"
    },
    {
        question: "How many sdlc models are there?",
        answers: {
          a: "6",
          b: "8",
          c: "4"
        },
        correctAnswer: "a"
    },
    {
        question: "How long does each iteration last in the Agile model?",
        answers: {
          a: "Few days",
          b: "1 to 3 weeks",
          c: "About a month"
        },
        correctAnswer: "b"
    },
    {
        question: "What model is used for large, expensive and complicated projects.",
        answers: {
          a: "Agile",
          b: "Waterfall",
          c: "Spiral"
        },
        correctAnswer: "c"
    },
    {
        question: "What model does not attempt to start with a full specification of requirements.",
        answers: {
          a: "Prototyping",
          b: "V-shape",
          c: "Iterative"
        },
        correctAnswer: "c"
    },
    {
       question: "Alternative to Waterfall model that is no longer in use",
       answers: {
         a: "Prototyping",
         b: "Iterative",
         c: "Spiral",
        },
        correctAnswer: "a"
    }
  ];
  buildQuiz();
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>
            <br>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    // the code we want to run for each question goes here
  });

  // we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  // gather answer containers from our quiz
const answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
let numCorrect = 0;

// for each question...
myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;
  
      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;

// if answer is correct
if(userAnswer === currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
  
    // color the answers green
    answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank
  else{
    // color the answers red
    answerContainers[questionNumber].style.color = 'red';
  }

// show number of correct answers out of total
resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
