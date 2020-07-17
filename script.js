// makes sure everything is loaded before running JavaScript
$(document).ready(function () {
    // need to declare timer
    // need to declare score

    $("#button-start").on("click", function () {
        console.log("You clicked a button!");
        //Resource: https://www.tutorialrepublic.com/faq/how-to-change-css-display-property-to-none-or-block-using-jquery.php#:~:text=Answer%3A%20Use%20the%20jQuery%20css,to%20the%20elements%20i.e.%20inline.
        $("#startPage").css("display", "none");
        $("#questionPage").css("display", "block");
    })
})