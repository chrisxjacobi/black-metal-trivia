var game = {
    correct: 0,
    incorrect: 0,
    counter: 100,

    clock: function () {
        game.counter--;
        $('#counter').html(game.counter);
        
        if (game.counter === 0) {
            alert("Game over!");
        } 

    }
};

var questionOne = {
    question: "I: Who is the frontman for Emperor?",
    choices: ["Ihsahn", "Necrobutcher", "Gaahl", "Nocturno Culto"],
    correctAnswer: 0
};

var questionTwo = {
    question: "Which artist released the classic album 'Filosofem'?",
    choices: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
    correctAnswer: 2
};

var questionThree = {
    question: "Celtic Frost rose from the ashes of what band?",
    choices: ["Mortuary Drape", "Hellhammer", "Goblin", "Darkthrone"],
    correctAnswer: 1
};
var questionFour = {
    question: "Which act released the 2013 genre-defying 'Sunbather'?",
    choices: ["Woe", "Marduk", "Deafheaven", "Enslaved"],
    correctAnswer: 2
};
var questionFive = {
    question: "Complete the band name: _____ in the Throne Room",
    answers: ["Wolves", "Goats", "Dreams", "Drapes"],
    correctAnswer: 0
};
var questionSix = {
    question: "Which of the following is NOT an album by Watain?",
    answers: ["Lawless Darkness", "Evangelion", "Sworn to the Dark", "The Wild Hunt"],
    correctAnswer: 1
};

var questionSeven = {
    question: "Which French collective has managed to keep their personal identities private for almost 20 years?",
    answers: ["Cilice", "Gojira", "Celeste", "Deathspell Omega"],
    correctAnswer: 3
};
var questionEight = {
    question: "Legendary act Bathory was named after noblewoman Countess Elisabeth Bathory of which Eastern European country?",
    answers: ["Romania", "Poland", "Slovakia", "Hungary"],
    correctAnswer: 3
};
var questionNine = {
    question: "Immortal has based their lyrical content on the events of what fictitious world?",
    answers: ["Isa", "Blashyrkh", "Von", "Divinus"],
    correctAnswer: 1
};
var questionTen = {
    question: "Which band coined the term 'Black Metal' with the title of their 1982 classic album?",
    answers: ["Venom", "Ascension", "Dispirt", "Weakling"],
    correctAnswer: 0
};

var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen
];

$(document).ready(function () {
    $('#counter-start').prepend('<h5>Time Remaining: <span id="counter-number">100</span> Seconds</h5>');

    $(".question-area").hide();
    $(".image-area").hide();
    $("#counter-start").hide();

    $("#start-button").click(function () {
        $(".hero-text-box").fadeOut("slow", function () {
            $("#counter-start").fadeIn("slow", function () {});
            $(".question-area").fadeIn("slow", function () {});

            var submit = $('<button>');
            submit.addClass('submit');
            submit.text('finish');
            $('.question-area').append(submit);



        });


    });
});


//        var displayQuestion = () => {
//            $(".question-area").fadeIn("slow", function () {
//                $(".question-area").text(questions.question);
//        });
//        }

//        function displayCurrentQuestion() {
//
//            var question = questions[currentQuestion].question;
//            var questionClass = $(document).find(".quizContainer > .question");
//            var choiceList = $(document).find(".quizContainer > .choiceList");
//            var numChoices = questions[currentQuestion].choices.length;
//
//            // Set the questionClass text to the current question
//            $(questionClass).text(question);
//
//            // Remove all current <li> elements (if any)
//            $(choiceList).find("li").remove();
//
//            var choice;
//            for (i = 0; i < numChoices; i++) {
//                choice = questions[currentQuestion].choices[i];
//                $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
//            }
//        }



// put in function for starting game
// put in function for submit/finishing game}
