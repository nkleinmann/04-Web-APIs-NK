// makes sure everything is loaded before running JavaScript
$(document).ready(function () {
    // need to declare timer
    let score = 0;

    //Storing all the questions 
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

    // Resource: https://www.sitepoint.com/community/t/checking-answer-in-a-quiz/325000
    // function getQuestions() {
    //     let indexQuestion = 0;
    //     for (let i = 0; i < questionList.length; i++) {
    //         $("#questionPage").text(questionList[i].questionList);
    //         $("#answerList").children[i].text(questionList.choices[i]);
    //     }
    // }

    let questionIndex = 0;

    function showQuestion() {
        $("h1.uniqueQuestion").text(questionList[questionIndex].question);
        for (let i = 0; i < questionList[questionIndex].choices.length; i++) {
            $(".button-" + (i + 1)).text(questionList[questionIndex].choices[i]);
        }
    }


    function checkAnswer() {
        if (questionList[questionIndex].answer === $(this).data("index")) {
            score++;
        }
        console.log(score);
        questionIndex++;
        if (questionIndex > 4) {
            $("#questionPage").hide();
            $("#finalPage").show();
        }
        else {
            showQuestion();
        }
    }

    $(".questionButton").on("click", checkAnswer);

    // when start button click, screen changes to question page
    $("#button-start").on("click", function () {
        console.log("You clicked a button!");
        //Resource: https://www.w3schools.com/jquery/jquery_hide_show.asp
        $("#startPage").hide();
        $("#questionPage").show();
        // getQuestions();
        showQuestion();
    })
    console.log(questionList);

})