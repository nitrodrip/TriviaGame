const quizContainer = document.getElementById('quiz');


const resultsContainer = document.getElementById('results');

//Submit button
const submitButton = document.getElementById('submit');

//Questions Array
const myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "Superman",
      b: "The Terminator",
      c: "Waluigi, obviously"
    },
    correctAnswer: "c"
  },
  {
    question: "What is the best site ever created?",
    answers: {
      a: "SitePoint",
      b: "Simple Steps Code",
      c: "Trick question; they're both the best"
    },
    correctAnswer: "c"
  },
  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
    },
    correctAnswer: "d"
  }
];

function buildQuiz(){
	
	/*store HTML output*/
  	const output = [];

	/*for each question...*/
  	myQuestions.forEach(
    (currentQuestion, questionNumber) => {

	/*store the list of answer choices*/
    const answers = [];

	/*and for each available answer...*/
    for(letter in currentQuestion.answers){

	/*add an HTML radio button*/
    answers.push(`<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

	/*add this question and its answers to the output*/
    output.push(
       `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

	/*finally combine our output list into one string of HTML and put it on the page*/
  	quizContainer.innerHTML = output.join('');
}

function showResults(){}

	/*display quiz right away*/
	buildQuiz();

	/*on submit, show results*/
	submitButton.addEventListener('click', showResults);

	/* here goes the code we want to run for each question*/
	myQuestions.forEach( (currentQuestion, questionNumber) => {
  
});

	/*and for each available answer...*/
	for(letter in currentQuestion.answers){

/*.add an html radio button*/
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

	/*add this question and its answers to the output*/
	output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizContainer.innerHTML = output.join('');

function showResults(){

	//gather answer containers from our quiz*/
  	const answerContainers = quizContainer.querySelectorAll('.answers');

	/*keep track of user's answers*/
  	let numCorrect = 0;

	/*for each question...*/
  	myQuestions.forEach( (currentQuestion, questionNumber) => {

	/*find selected answer*/
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		//*if answer is correct, add to the number of correct answers
    	if(userAnswer===currentQuestion.correctAnswer){
      	numCorrect++;

		/*color the answers Green*/
      	answerContainers[questionNumber].style.color = 'lightgreen';
    }
		//*if answer is wrong or blank, color the answers Red
    	else{answerContainers[questionNumber].style.color = 'red';
    }
  });

	/*show number of correct answers out of total*/
  	resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

	/*gather answer containers from our quiz*/
	const answerContainers = quizContainer.querySelectorAll('.answers');

	/*keep track of user's answers*/
	let numCorrect = 0;

	/*for each question...*/
	myQuestions.forEach( (currentQuestion, questionNumber) => {

  //find selected answer
  const answerContainer = answerContainers[questionNumber];
  const selector = `input[name=question${questionNumber}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  //if answer is correct color the answers green
  if(userAnswer===currentQuestion.correctAnswer){
    // add to the number of correct answers
    numCorrect++;
	answerContainers[questionNumber].style.color = 'lightgreen';
  }
  // if answer is wrong or blank color the answers red
  else{
    answerContainers[questionNumber].style.color = 'red';
  }
});