    var panel = $('#question-area');
    var countStartNumber = 30;

    $(document).on('click', '#start-button', function (e) {
        $('#counter-start').prepend('<h5>Time Remaining: <span id="counter-number">30</span> Seconds</h5>');
        $(".question-area").hide();
        $(".image-area").hide();
        $("#counter-start").hide()

        $(".hero-text-box").fadeOut("slow", function () {
            $("#counter-start").fadeIn("slow", function () {

            });
            game.displayQuestion();

        });

    });


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

    var game = {
        questions: questions,
        currentQuestion: 0,
        counter: countStartNumber,
        correct: 0,
        incorrect: 0,
        countdown: function () {
            game.counter--;
            $('#counter-number').html(game.counter);

            if (game.counter === 0) {
                console.log('TIME UP');
                game.timeUp();
            }
        },
        displayQuestion: function () {
            timer = setInterval(game.countdown, 1000);
            panel.fadeIn();
            panel.html('<p>' + questions[this.currentQuestion].question + '</p>');
            for (var i = 0; i < questions[this.currentQuestion].answers.length; i++) {
                panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i] + '</button>');
            };
        },

        timeUp: function () {
            clearInterval(timer);
            $('#counter-number').html(game.counter);

            panel.html('<h2>YOU LOSE!</h2>');


            if (game.currentQuestion === questions.length - 1) {
                setTimeout(game.results, 3 * 1000);
            } else {
                setTimeout(game.nextQuestion, 3 * 1000);
            }
        },


    };


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
