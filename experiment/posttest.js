/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
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

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "What indicates a positive test for phenol using ferric chloride?",  ///// Write the question inside double quotes
      answers: {
        a: "Silver mirror",                  ///// Write the option 1 inside double quotes
        b: " Violet color",                  ///// Write the option 2 inside double quotes
        c: "Reddish precipitate",                  ///// Write the option 3 inside double quotes
        d: "Fruity odor"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

    {
      question: " Which group decolorizes bromine water?:",  ///// Write the question inside double quotes
      answers: {
        a: " Alcohol",                  ///// Write the option 1 inside double quotes
        b: "Alkyne",                  ///// Write the option 2 inside double quotes
        c: " Ester",                  ///// Write the option 3 inside double quotes
        d: "Ketone"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
       {
      question: " What is the result of a positive Tollen’s test?",  ///// Write the question inside double quotes
      answers: {
        a: " Reddish brown gas",                  ///// Write the option 1 inside double quotes
        b: " Silver mirror",                  ///// Write the option 2 inside double quotes
        c: " Violet color",                  ///// Write the option 3 inside double quotes
        d: "Effervescence"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },///// To add more questions, copy the section below 
       {
      question: " What result do you expect if an ester is heated with NaOH",  ///// Write the question inside double quotes
      answers: {
        a: "Violet color",                  ///// Write the option 1 inside double quotes
        b: "Effervescence",                  ///// Write the option 2 inside double quotes
        c: " Fruity smell",                  ///// Write the option 3 inside double quotes
        d: "No change"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
       {
      question: " What confirms the presence of amine group when reacted with nitrous acid?",  ///// Write the question inside double quotes
      answers: {
        a: " Formation of red precipitate",                  ///// Write the option 1 inside double quotes
        b: "Fruity odor",                  ///// Write the option 2 inside double quotes
        c: " Effervescence due to nitrogen gas",                  ///// Write the option 3 inside double quotes
        d: "No visible reaction"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
