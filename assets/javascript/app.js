

//Make a trivia game that asks several questions and gives you 4 options to choose. You only have 15 seconds to choose!
    // Have a home page asking to be pressed to begin the game.
        // .onClick event to start
    // Display a timer countdown, question and a list of clickable answers
        // Need to make a timer for 15 seconds
        // Need an array of questions
        // Need an array of answers
    // After a question is answered, reload the screen with "Correct Answer" or "Wrong!" along with the correct answer.
        // Start timer function
        // Pull Question Array inject them into the document
        // Pull Answer Options and inject them into the document
        // When an answer is clicked 
            // Compare to correct answer BTS
                // Add to correctAnswer or wrongAnswer variable
                // Clear screen, say either correct answer, wrong answer or time's up!
                // If time runs out or wrong answer, return correct answer as well
            // Add a timer for 10 seconds to switch to the next set of questions
            // show gif that relates (extra credit)
    // Without any user input, move to the next question while resetting the timer, question and answers    
    // (extra credit) At the end, display total score along questions that were answered wrong


// Variables

var intervalId;
var questionTimer = 0;
var userGuess; // In function - will hold user's guess
var turnNumber = 3; // Question number to stop timer after last question is answered
var onQuestionScreen = false;

var questionsArray = []; // add questions, answer and filler options all together?
var questionAnswer; // In Function - this will be a variable pointing to the correct answer in the array 

var wins;
var losses;

console.log("Load Timer Started " + questionTimer);
//-------------------------------------------------------------------------------------------------------
// Functions

function gameTimer () {
    onQuestionScreen = True;
    questionTimer = 15;
    intervalId = setInterval (decrement, 1000);
    if (questionTimer === 0) {
        console.log("Timer is done")
        // if (turnNumber >0) {
        //     console.log("Turn Number above 0");
        //     answerScreen ();
        // }
    }
}

function answerScreen() {
    onQuestionScreen = false;
    console.log("answerScreen Timer Started | " + "On game screen: " + onQuestionScreen);
    questionTimer = 10;
    intervalId = setInterval (decrement, 1000);
}

function decrement () {
    questionTimer--;
    $("#countdownTimer").text(questionTimer);
    console.log("timer " + questionTimer);
    if (questionTimer ===0) {
        console.log("Timer ran out");
        clearInterval(intervalId);
        answerScreen();
    }
}



gameTimer ();


//-------------------------------------------------------------------------------------------------------
// Main Processes




//-------------------------------------------------------------------------------------------------------
