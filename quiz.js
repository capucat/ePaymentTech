(function() {
  const myQuestions = [
    {
      question: "What type of weather do you like?",
      answers: {
        a: "I like all seasonal weather.",
        b: "Moderate, mild weather.",
        c: "Lots of sunshine!",
        d: "Rainy, warm weather."
      },
      answer_leopard: "b",
      answer_rhino: "d",
      answer_elephant: "a",
      answer_lemur: "c"
    },
    {
      question: "Invision when you're in your most comfortable state. Who are you with?",
      answers: {
        a: "No one.",
        b: "In a large group! I love being around people.",
        c: "Most of the time alone, but sometimes in a group.",
        d: "Just my family."
      },
      answer_leopard: "a",
      answer_rhino: "c",
      answer_elephant: "b",
      answer_lemur: "d"
    },
    {
      question: "There is one piece of food left and there are others around you. What do you do?",
      answers: {
        a: "I look at my parents to see what they do.",
        b: "I hide it under my other food to eat later.",
        c: "Depends on how hungry I am.",
        d: "I share with my family."
      },
      answer_leopard: "b",
      answer_rhino: "c",
      answer_elephant: "a",
      answer_lemur: "d"


    }
  ];

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
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect_leopard = 0;
    let numCorrect_rhino = 0;
    let numCorrect_elephant = 0;
    let numCorrect_lemur = 0;


    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.answer_leopard) {
        // add to the number of correct answers
        numCorrect_leopard++;

        // color the answers green
        // answerContainers[questionNumber].style.color = "yellow";
      }

      if (userAnswer === currentQuestion.answer_rhino) {
        numCorrect_rhino++;

        // answerContainers[questionNumber].style.color = "red";
      }

      if (userAnswer === currentQuestion.answer_elephant) {
        numCorrect_elephant++;
      }

      if (userAnswer === currentQuestion.answer_lemur) {
        numCorrect_lemur++;
      }

    });

    var dict = new Object();
    dict["AMUR LEOPARD"] = numCorrect_leopard;
    dict["JAVAN RHINO"] = numCorrect_rhino;
    dict["ASIAN ELEPHANT"] = numCorrect_elephant;
    dict["LEMUR"] = numCorrect_lemur;

    var finalAnswer = "";

    function getKeysWithHighestValue(o, n){
      var keys = Object.keys(o);
      keys.sort(function(a,b){
        return o[b] - o[a];
      })
      console.log(keys);
      return keys.slice(0,n);
    }

    finalAnswer = getKeysWithHighestValue(dict,1);
    // window.alert("Your Animal is: "+finalAnswer);

    var ans = document.getElementById("result");
    ans.innerHTML += "<p>"+finalAnswer+"</p>";
    // show number of correct answers out of total
    // resultsContainer.innerHTML = finalAnswer;
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

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();

$(function () {
        $('#createAcct').click(function() {
            $('#resultModal').one('hidden.bs.modal', function() {
                $('#signUpModal').modal('show');
            }).modal('hide');
        });
    });

// function signIn() {
//     $('#signInModal').show().on('shown', function() {
//     $('#resultModal').modal('hide');
// });
    // $("#signInModal").modal('show');
    // $('#resultModal').modal('hide');
    // $("#signInModal").modal('show');
// }
// function openAcc() {
//     // $('#resultModal').modal('hide');
//     $("#signUpModal").modal('show');
// }
