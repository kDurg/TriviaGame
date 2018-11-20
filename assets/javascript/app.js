

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
var questions = {
    q1: "What is the tallest mountain in the United States?",
        a1q1: "Mount Elbert, CO",
        a2q1: "Mount Rainier, WA",
        a3q1: "White Mountain Peak, CA",
        a4q1: "Denali, AK", //correct answer at 20,310ft
    q2: "What was the first National Park in the United States?",
        a1q2: "Yosemite, CA",
        a2q2: "Glacier, MT",
        a3q2: "Yellowstone, WY", // Correct answer - 3/1/ 1872
        a4q2: "Sequoia, CA",
    q3: "What was the most popular outdoor activity (by participants) in the United States in 2017?",
        a1q3: "Fishing - Freshwater, Saltwater, Fly", // correct - 49.1 Million
        a2q3: "Biking - BMX, Road, Mountain",
        a3q3: "Camping - Car, RV, Backyard",
        a4q3: "Hiking",
    q4: "What is the first thing you should do when confronted by a Black Bear?",
        a1q4: "Calmly Stand Ground", // correct, stand ground until they figure out youre human
        a2q4: "Yell And Wave Arms Above Head",
        a3q4: "Speedwalk Backwards While Speaking Outloud",
        a4q4: "Throw Grenade And Duck", 
    q5: "If a snake bites you, what should you do?",
        a1q5: "Move Away From Snake, Call For Help And Lay Still Until Help Arrives", // Correct
        a2q5: "Have A Friend To Suck Out The Poisen",
        a3q5: "Apply A Tourniquet, Water And Ice If Available",
        a4q5: "Pour Skol Vodka On Bite",
    q6: "What is the first thing you should do to put out a fire",
        a1q6: "Cover With Dried Leaves To Cut Oxygen To Embers", 
        a2q6: "Apply Bear Remains Over Top From Previous Explosion",
        a3q6: "Nothing Once The Flames Die Out",
        a4q6: "Pour Water, Cover With Soil, Feel For Heat", // Correct: Smokey the Bear approved
    q7: "If all of the previous situations happen while in nature, what should you do?",
        a1q7: "Bring More Explosives", 
        a2q7: "Bring More Liquor Next Time, You'll Need it",
        a3q7: "Stop Going Into Nature, You Will Die",
        a4q7: "Bring A Camera Next Time, No One Believes Your Terrible Luck",
}; 

var questionAnswer; // In Function - this will be a variable pointing to the correct answer in the array 

var intervalId;
var questionTimer = 0;
var userGuess; // In function - will hold user's guess
var turnNumber = 0; // Question number to stop timer after last question is answered
var onQuestionScreen = false;

var wins;
var losses;

console.log("Load Timer Started " + questionTimer);
//-------------------------------------------------------------------------------------------------------
// Functions

// DONE: Timer Functions
function gameTimer () {
    onQuestionScreen = true;
    questionTimer = 15;
    intervalId = setInterval (decrement, 1000);
    if (questionTimer === 0) {
        console.log("Timer is done")
        onQuestionScreen = false;
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
        if (onQuestionScreen === true) {
            onQuestionScreen === false;
            answerScreen();
            console.log ("switching to Answer Screen")

        } else if (onQuestionScreen === false) {
            onQuestionScreen === true;
            gameTimer ();
            console.log ("switching to Game Screen")
        }
    }
}

// not working: Question Functions

function startScreen (){ //clears the screen and shows the start button
    console.log ("Start Screen Started");
    $("#timeRemaining").hide();
    $("#countdownTimer").hide();
    $("#questionBox").hide();
    $("#answerOptions").hide ();
    $("#startButton").append("<Button><h1> 'Click To Begin' </h1>");

}

function cycleQuestions (){
    console.log ("cycleQuestions Function Activated"); 
    console.log(questions.length); //undefined?
    for (var i= 0; i<questions.length; i++)
        if (turnNumber === 0) {
            console.log ("1st Question to Be Displayed")
            $("#questionBox").text("Question " + (turnNumber+1) + ":  " + questions.q[i])
        } else { console.log ("Not 1st Question")}
};




//-------------------------------------------------------------------------------------------------------
// Main Processes

startScreen();

$("#startButton").on("click", function () {
    $("#startButton").hide();
    $("#timeRemaining").show();
    $("#countdownTimer").show();
    $("#questionBox").show();
    $("#answerOptions").show ();
    // gameTimer ();
    cycleQuestions ();
})


//-------------------------------------------------------------------------------------------------------
