// makes sure everything is loaded before running JavaScript
$(document).ready(function () {
    let timer = 30;
    let timeLeft;
    let score = 0;

    // Storing all questions and answers in an array of objects (I used the quiz questions from the gif)
    // Resource: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects
    const questionList = [
        {
            question: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: 2
        },
        {
            question: "The condition in an if/else statement is enclosed within__",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: 2
        },
        {
            question: "Arrays in JavaScript can be used to store __",
            choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: 3
        },
        {
            question: "String values must be enclosed within __ when being assigned to variables",
            choices: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: 2
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is:",
            choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
            answer: 3
        },
    ];


    // This variable lets me loop through my questions
    let questionIndex = 0;

    // Shows questions from my array of objects
    function showQuestion() {
        $("div.incorrectCorrect").text("");
        $("h1.uniqueQuestion").text(questionList[questionIndex].question);
        for (let i = 0; i < questionList[questionIndex].choices.length; i++) {
            $(".button-" + (i + 1)).text(questionList[questionIndex].choices[i]);
        }
    }

    let game = false;

    // Checks answers to questions
    function checkAnswer() {
        if (questionList[questionIndex].answer === $(this).data("index")) {
            score++;
            $("div.incorrectCorrect").text("Correct!");
            // changes to final page when timer equals 0
            if (timer <= 0) {
                timer = 1;
                $("#questionPage").hide();
                $("div.finalPage").show();
                finalP();
            }
        }
        else {
            $("div.incorrectCorrect").text("Incorrect!");
            // Subtracts 10 seconds if answer is wrong
            timer = timer - 10;
            // changes to final page when timer equals 0
            if (timer <= 0) {
                timer = 1;
                $("#questionPage").hide();
                $("div.finalPage").show();
                finalP();
            }
        }
        questionIndex++;

        // Changes to final page if index is greater than or equal to questionList length
        if (questionIndex >= questionList.length) {
            game = true;
            timer = 1;
            $("#questionPage").hide();
            $("div.finalPage").show();
            finalP();
        }
        // Otherwise shows next question
        else {
            // Delays next question for 1 second
            setTimeout(showQuestion, 1000);
        }
    }

    // displays final page and stores user input
    function finalP() {
        $("h3.yourScore").text("Your final score is " + score);
    }

    // sets empty array
    let scoresArray = [];


    //Stores initials and scores in local storage
    function storelocalStorage() {
        scoresArray = JSON.parse(localStorage.getItem("scores"));
        const initials = $("#yourInitials").val();
        let userScore = { initials, score };

        if (!scoresArray) {
            scoresArray = [];
        }
        scoresArray.push(userScore);
        localStorage.setItem("scores", JSON.stringify(scoresArray));
    }

    // Loads high scores from local storage and puts scores on screen
    function loadStorageScores() {
        let scoresArray = localStorage.getItem("scores");
        if (!scoresArray) {
            scoresArray = [];
        }
        else {
            scoresArray = JSON.parse(scoresArray);
        }
        // Sorts the scores for High Score page
        scoresArray.sort(function (a, b) {
            return b.score - a.score;
        });

        // Loops through scoresArray and displays initials and score on page
        for (let i = 0; i < scoresArray.length; i++) {
            let newLiEl = $("<li>")
            newLiEl.text(scoresArray[i].initials.toUpperCase() + "-" + scoresArray[i].score);
            $("#high-scores").append(newLiEl);
        }
    }

    // timer
    function timerCounter() {
        timer = 30;
        timeLeft = setInterval(function () {
            timer--;
            $("h6.time").text(timer + "seconds");
            if (timer <= 0) {
                clearInterval(timeLeft);
                timer = 0;
                $("#questionPage").hide();
                $("div.finalPage").show();
            }
        }, 1000)
        if (game === true) {
            $("#questionPage").hide();
            $("div.finalPage").show();
            finalP();
        }
    }

    // when start button click, screen changes to question page
    $("#button-start").on("click", function () {
        // Resource: https://www.w3schools.com/jquery/jquery_hide_show.asp
        $("#startPage").hide();
        $("#questionPage").show();

        timerCounter();

        // getQuestions();
        showQuestion();


    })

    // When button in question clicked, answer is checked (checkAnswer function is called))
    $(".questionButton").on("click", checkAnswer);

    // When form is submitted add to local storage and add initials and scores to page as well as change to highScorePage
    $("#initials").on("submit", function (event) {
        event.preventDefault();
        $('#high-scores').empty();
        storelocalStorage()
        loadStorageScores()
        $("div.finalPage").hide();
        $("div.highScorePage").show();
    })

    // Restart Game
    $(".goBack").on("click", function () {
        $("div.highScorePage").hide();
        $("div.startPage").show();
        questionIndex = 0;
    })

    // Clear High Scores
    $(".clearScores").on("click", function () {
        localStorage.clear();
    });

    // View my high scores button (in top left of header)
    $(".btn-highscores").on("click", function () {
        $("div.highScorePage").show();
        $("div.startPage").hide();
        $("#questionPage").hide();
        $("div.finalPage").hide();
        timer = 1;
    });


})