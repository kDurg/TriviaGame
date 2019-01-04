

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
var questionsArray = [
    {
    question: "What is the tallest mountain in the United States?",
    choices: ["Mount Elbert, CO", "Mount Rainier, WA" ,"White Mountain Peak, CA","Denali, AK"],
    answer: 3
    },
    {
    question: "What was the first National Park in the United States?",
    choices: ["Yosemite, CA", "Glacier, MT", "Yellowstone, WY", "Sequoia, CA"],
    answer: 2 // Correct answer - 3/1/ 1872
    },
    {
    question: "What was the most popular outdoor activity (by participants) in the United States in 2017?",
    choices: ["Fishing - Freshwater, Saltwater, Fly", "Biking - BMX, Road, Mountain", "Camping - Car, RV, Backyard", "Hiking"],
    answer: 0
    },
    {
    question: "What is the first thing you should do when confronted by a Black Bear?",
    choices: ["Calmly Stand Ground", "Yell And Wave Arms Above Head", "Speedwalk Backwards While Speaking Outloud", "Throw Grenade And Duck"], 
    answer: 0 // correct, stand ground until they figure out youre human
    },
    {
    question: "If a snake bites you, what should you do?",
    choices: ["Move Away From Snake, Call For Help And Lay Still Until Help Arrives", "Have A Friend To Suck Out The Poisen", "Apply A Tourniquet, Water And Ice If Available", "Pour Skol Vodka On Bite"],
    answer: 0, // Correct
    },
    {
    question: "What is the first thing you should do to put out a fire?",
    choices: ["Cover With Dried Leaves To Cut Oxygen To Embers", "Apply Bear Remains Over Top From Previous Explosion", "Nothing Once The Flames Die Out", "Pour Water, Cover With Soil, Feel For Heat"], 
    answer: 3 // Correct: Smokey the Bear approved
    },
    {
    question: "If all of the previous situations happen while in nature, what should you do?",
    choices: ["Bring More Explosives", "Bring More Liquor Next Time, You'll Need it", "Stop Going Into Nature, You Will Die", "Bring A Camera Next Time, No One Believes Your Terrible Luck"],
    answer: 2
    }
]; 

//var questionAnswer; // In Function - this will be a variable pointing to the correct answer in the array 

var intervalId;
var questionTimer = 0;
var userGuess; // In function - will hold user's guess
var turnNumber = 0; // Question number to stop timer after last question is answered
var onQuestionScreen = false;

var points;
// var losses;

console.log("Load Timer Started " + questionTimer);
//-------------------------------------------------------------------------------------------------------
// Functions

function startScreen (){ //clears the screen and shows the start button
    console.log ("Start Screen Started");
    $("#timeRemaining").hide();
    $("#countdownTimer").hide();
    $("#questionBox").hide();
    $("#answerOptions").hide ();
    $("#startButton").append("<Button><h1> 'Click To Begin' </h1>");
}

// DONE: Timer Functions
function gameTimer () {
    onQuestionScreen = true;
    questionTimer = 60;
    intervalId = setInterval (decrement, 1000);
    if (questionTimer === 0) {
        console.log("Timer is done")
        onQuestionScreen = false;
    }
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

function cycleQuestions (){ //NOT WORKING: 
        console.log ("cycleQuestions Function Activated"); 
        console.log(questionsArray);

        // dynamicaly create a new div to show questions 
        for (var i= 0; i<questionsArray.length; i++) {
            var newDiv = "question"+ parseInt(i+1);
            $("#questionBox").append("<div id = "+ newDiv + ">  <p></p><h4>"+ JSON.stringify(questionsArray[i].question)+ "</h4>    </div>");
            
            // Dynamically create radio buttons with answers as options
            for (var j= 0; j<questionsArray[i].choices.length; j++) {
                var radioBtn = $('<input type= "radio" name= "radiobutton"' + j + '>' + questionsArray[i].choices[j]);
                radioBtn.text(questionsArray[i].choices[j]);
                // radioBtn.appendTo("#questionBox");
                console.log('Choices: ' + questionsArray[0].choices[i]);
            }
        }  
    };

function gradeAnswers() {
    // need to loop through each question and compare input to answer if time is left
        // create a loop to go through each question
            // within each question, run through input and compare with answer
                // if answer is correct, add one point
                // if answer is incorrect, 0 points and add question to incorrect array to show at end
            // once all questions or time runs out have been checked, display new screen with score, percentage and a list of incorrect questions with correct answers
    if (questionTimer ===!0) {
        for (var i = 0; i < questionsArray.length; i++) {
            if ($('radiobutton').val === questionsArray.answer) {
                points++;
            }
        }
    } else {
        alert ('Time ran out!');
    }
    console.log("grading Answers complete. Score: " + points + " / " + questionsArray.length);
}

// function answerScreen() {
//     onQuestionScreen = false;
//     console.log("answerScreen Timer Started | " + "On game screen: " + onQuestionScreen);
//     questionTimer = 10;
//     intervalId = setInterval (decrement, 1000);
// }










//-------------------------------------------------------------------------------------------------------
// Main Processes

startScreen();

$("#startButton").on("click", function () {
    points = 0;
    $("#startButton").hide();
    $("#timeRemaining").show();
    $("#countdownTimer").show();
    $("#questionBox").show();
    $("#answerOptions").show ();
    // gameTimer ();
    cycleQuestions ();
})


//-------------------------------------------------


//-------------------------------------------------------------------------------------------------------
