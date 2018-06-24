(function() {
  var myQuestions = [
    {
      question: "What is the best-selling Nintendo exclusive game of all time?",
      answers: {
        a: "Duck Hunt",
        b: "Super Mario Bros.",
        c: "Mario Kart Wii",
		d: "Wii Sports"
      },
      correctAnswer: "d" 
		//Wii Sports (2006) - The game sold 82.96 million copies, more than double that of the original Super Mario Bros.
    },
    {
      question: "Which of the following games did Mario creator Shigeru Miyamoto NOT design?",
      answers: {
        a: "Donkey Kong",
        b: "Kid Icarus",
        c: "Excitebike",
		d: "The Legend of Zelda"
		  
      },
      correctAnswer: "b"
		//Kid Icarus - Toru Osawa and Yoshio Sakamoto are credited with designing Kid Icarus. Sakamoto is also co-creator of Metroid.
    },
    {
      question: "What is the first game with Princess Zelda as a playable character?",
      answers: {
        a: "Zelda: Wand of Gamelon",
        b: "The Legend of Zelda: Ocarina of Time",
        c: "Super Smash Bros. Melee",
        d: "Super Smash Bros. Brawl"
      },
      correctAnswer: "a"
		//Zelda: Wand of Gamelon (1993) This truly atrocious game was released for the ill-fated Philips CD-i system. The low budget, crudely animated game was created with almost no involvement from Nintendo.
    },
	  {
		question: "What is the best-selling Nintendo handheld of all time?",
      answers: {
        a: "Nintendo Game Boy",
        b: "Nintendo Game Boy Advance",
        c: "Nintendo DS",
        d: "Nintendo 3DS"
      },
      correctAnswer: "c"
		//The Nintendo DS is the second-best selling video game system of all time, second only to the Sony PlayStation 2.  
	  }
  ];

  function buildQuiz() {
    
	  //store the HTML output
    	var output = [];

    	//for each question...
    	myQuestions.forEach((currentQuestion, questionNumber) => {
      
		//store the list of answer choices
		var answers = [];

      	//and for each available answer...
      	for (letter in currentQuestion.answers) {
        
		// ...add an HTML radio button
        answers.push(
          `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      //add question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // last combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
	  
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    //track answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
    
	// find selected answer
    var answerContainer = answerContainers[questionNumber];
    var selector = `input[name=question${questionNumber}]:checked`;
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
     if (userAnswer === currentQuestion.correctAnswer) {
        
		 // add to the number of correct answers color green
        numCorrect++; answerContainers[questionNumber].style.color = "lightgreen";
        
      } else {
        // if answer is wrong or blank color answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();