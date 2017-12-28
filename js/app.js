// variables way to grab these game areas
var gameDiv = $("#question-area");
var endDiv = $("#score-area");

// initial page load
$("#question-area").hide();
$("#score-area").hide();
$("#image-area").hide();
$("#counter-start").hide();

// question area load on start button click
$(document).on('click', '#start-button', function () {
    $('#counter-start').prepend('<h5>Time Remaining: <span id="counter-number">99</span> Seconds</h5>');

    $(".hero-text-box").fadeOut("slow", function () {
        $("#counter-start").fadeIn();
        $("#question-area").fadeIn();
        game.start();
    });

});

$(document).on('click', '#submit-button', function (e) {
    $("#question-area").hide();
    $("#score-area").fadeIn();
    game.done();
});

// game questions
var questions = [
    {
        question: "I: Who is the frontman for Emperor?",
        choices: ["Ihsahn", "Necrobutcher", "Gaahl", "Nocturno Culto"],
        correctAnswer: "Ihsahn"
    },
    {
        question: "II: Which artist released the classic album 'Filosofem'?",
        choices: ["Mayhem", "Dark Fortress", "Burzum", "Venom"],
        correctAnswer: "Burzum"
    },
    {
        question: "III: Celtic Frost rose from the ashes of what band?",
        choices: ["Mortuary Drape", "Hellhammer", "Goblin", "Darkthrone"],
        correctAnswer: "Hellhammer"
    },
    {
        question: "IV: Which act released the 2013 genre-defying 'Sunbather'?",
        choices: ["Woe", "Marduk", "Deafheaven", "Enslaved"],
        correctAnswer: "Deafheaven"
    },
    {
        question: "V: Complete the band name: _____ in the Throne Room",
        choices: ["Wolves", "Goats", "Dreams", "Drapes"],
        correctAnswer: "Wolves"
    },
    {
        question: "VI: Which of the following is NOT an album by Watain?",
        choices: ["Lawless Darkness", "Evangelion", "Sworn to the Dark", "The Wild Hunt"],
        correctAnswer: "Evangelion"
    },
    {
        question: "VII: Which French collective has managed to keep their personal identities private for almost 20 years?",
        choices: ["Cilice", "Gojira", "Celeste", "Deathspell Omega"],
        correctAnswer: "Deathspell Omega"
    },
    {
        question: "VII: Legendary act Bathory was named after noblewoman Countess Elisabeth Bathory of which Eastern European country?",
        choices: ["Romania", "Poland", "Slovakia", "Hungary"],
        correctAnswer: "Hungary"
    },
    {
        question: "IX: Immortal has based their lyrical content on the events of what fictitious world?",
        choices: ["Isa", "Blashyrkh", "Von", "Divinus"],
        correctAnswer: "Blashyrkh"
    },
    {
        question: "X: Which band coined the term 'Black Metal' with the title of their 1982 classic album?",
        choices: ["Venom", "Ascension", "Dispirt", "Weakling"],
        correctAnswer: "Venom"
    }
];

//game object, with all necessary logic
var game = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    counter: 99,

    // when timer runs out, execute code to allow player to attempt game again
    countdown: function () {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('Time up');
            game.timeUp();
        }
    },

    // begin timer and loop through questions array to display questions, possible answers, and radio buttons for user to select an answer
    start: function () {
        timer = setInterval(game.countdown, 1000);

        for (var i = 0; i < questions.length; i++) {
            gameDiv.append('<p>' + questions[i].question + '</p>');
            for (var j = 0; j < questions[i].choices.length; j++) {
                gameDiv.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].choices[j] + '">' + questions[i].choices[j] + '<br>');
            }
        }
        gameDiv.append('<button id="submit-button">SUBMIT</button>');
    },

    // checking whether the user selected a correct answer, incorrect answer, or no answer
    done: function () {

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    // when timer runs out, the counter is cleared, a 'try again' button is displayed, and the page 'submit' button is disabled.
    timeUp: function () {
        clearInterval(timer);
        $("#counter-start").append('<button class="replay-button" value="Reload Page" onClick="document.location.reload(true)">Try again?</button>');

        document.getElementById('submit-button').disabled = true;
        document.getElementById('submit-button').textContent = '';
    },

    // display game results in a new div, allowing player to choose to play again
    result: function () {
        clearInterval(timer);
        $("#counter-start").hide();
        gameDiv.hide();
        endDiv.html('<h1>Finished</h1>');

        // text display based on user score
        if (this.correct === 10) {
            endDiv.append('<h3>You are TRVE KVLT black metal!</h3>');
        } else if (this.correct < 10 && this.correct >= 5) {
            endDiv.append('<h3>We welcome you through the gates of Valhalla!</h3>');
        } else if (this.correct < 5) {
            endDiv.append('<h3>You have disappointed the gods :(</h3>');
        }

        endDiv.append('<p>Correct: ' + this.correct + '</p>');
        endDiv.append('<h4>Incorrect: ' + this.incorrect + '</h4>');
        endDiv.append('<h4>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h4>');
        endDiv.append('<button class="replay-button" value="Reload Page" onClick="document.location.reload(true)">Try again?</button>')
    }
};
