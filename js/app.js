var questions = {
    choices: ["you", "me", "them"],
    good: "hello",
};

$(document).ready(function () {
    $(".question-area").hide();
    $(".image-area").hide();

    $("#start-button").click(function () {
        $(".hero-text-box").hide("slow", function () {
            $(".image-area").show("slow", function () {
                $(this).html("<img id='PBJ' src='http://assets.teamrock.com/image/423100e0-1c69-4917-91e4-e9d44fca2aba?w=800' />");
            });
            $(".question-area").show("slow", function () {
                $(this).append(questions.choices);
                $(this).append("<br>");
                $(this).next().append(questions.good);
            });
        });
    });



});
