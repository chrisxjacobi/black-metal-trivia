var questions = {
    choices: ["you", "me", "them"],
    good: "hello",
};

$(document).ready(function () {
    $(".question-area").hide();

    $("#start-button").click(function () {
        $(".hero-text-box").hide("slow", function () {
            $(".question-area").show("slow", function () {
                $(this).append(questions.choices);
                $(this).append("<br>");
                $(this).append(questions.good);
            });
        });
    });



});
