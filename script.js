// makes sure everything is loaded before running JavaScript
$(document).ready(function () {
    // need to declare timer
    // need to declare score

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

    // when start button click, screen changes to question page
    $("#button-start").on("click", function () {
        console.log("You clicked a button!");
        //Resource: https://www.w3schools.com/jquery/jquery_hide_show.asp
        $("#startPage").hide();
        $("#questionPage").show();
    })
    console.log(questionList);

})