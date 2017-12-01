var questions = {
    question: "who is the best?",
    choices: ["you", "me", "them"],
    good: "hello",
};

$(document).ready(function () {
    $(".question-area").hide();
    $(".image-area").hide();

    $("#start-button").click(function () {
        $(".hero-text-box").fadeOut("slow", function () {
            $(".question-area").fadeIn("slow", function () {
                $(this).append(questions.question);
                $(this).append("<br>");
                $(this).append(questions.choices);
                $(this).append("<br>");
                $(this).append(questions.good);
            });
            $(".image-area").fadeIn("slow", function () {
                $(this).html("<img id='PBJ' src='http://assets.teamrock.com/image/423100e0-1c69-4917-91e4-e9d44fca2aba?w=800' />");
            });
        });

    });
});

// put in function for starting game
// put in function for submit/finishing game
