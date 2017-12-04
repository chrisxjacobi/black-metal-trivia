$(document).ready(function () {

    var questions = [
        {
            question: "Who is the frontman for Emperor?",
            choices: ["Ihsahn", "Necrobutcher", "Gaahl", "Nocturno Culto"],
            correctAnswer: 0
    },
        {
            question: "Which artist released the classic album 'Filosofem'?",
            choices: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
            correctAnswer: 2
    },
        {
            question: "Celtic Frost rose from the ashes of what band?",
            choices: ["Mortuary Drape", "Hellhammer", "Goblin", "Darkthrone"],
            correctAnswer: 1
    },
        {
            question: "Which act released the 2013 genre-defying 'Sunbather'?",
            choices: ["Woe", "Marduk", "Deafheaven", "Enslaved"],
            correctAnswer: 2
    },
        {
            question: "Complete the band name: _____ in the Throne Room",
            answers: ["Wolves", "Goats", "Dreams", "Drapes"],
            correctAnswer: 0
    },
        {
            question: "Which of the following is NOT an album by Watain?",
            answers: ["Lawless Darkness", "Evangelion", "Sworn to the Dark", "The Wild Hunt"],
            correctAnswer: 1
    },
        {
            question: "Which French collective has managed to keep their personal identities private for almost 20 years?",
            answers: ["Cilice", "Gojira", "Celeste", "Deathspell Omega"],
            correctAnswer: 3
    },
        {
            question: "Legendary act Bathory was named after noblewoman Countess Elisabeth Bathory of which Eastern European country?",
            answers: ["Romania", "Poland", "Slovakia", "Hungary"],
            correctAnswer: 3
    },
        {
            question: "Immortal has based their lyrical content on the events of what fictitious world?",
            answers: ["Isa", "Blashyrkh", "Von", "Divinus"],
            correctAnswer: 1
    },
        {
            question: "Which band coined the term 'Black Metal' with the title of their 1982 classic album?",
            answers: ["Venom", "Ascension", "Dispirt", "Weakling"],
            correctAnswer: 0
    }
];

    var questionCounter = 0;
    var selections = [];



    $(".question-area").hide();
    $(".image-area").hide();
    $("#counter").hide()
    $("#next").hide();

    $("#start-button").click(function () {

        $(".hero-text-box").fadeOut("slow", function () {
            $(".question-area").fadeIn("slow", function () {
                $(this).text("Question: " + questions.question);
                $(this).append("<br>");
                $(this).append("<br>");
            });
            $(".image-area").fadeIn("slow", function () {
                $(this).html("<img id='PBJ' src='http://assets.teamrock.com/image/423100e0-1c69-4917-91e4-e9d44fca2aba?w=800' />");
            });
            $("#counter").fadeIn("slow", function () {

            });
            $("#next").fadeIn(3000, function () {

            });
        });

    });
});

// put in function for starting game
// put in function for submit/finishing game
