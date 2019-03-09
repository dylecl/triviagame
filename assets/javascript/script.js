var trivia = [
    {question: "What is the name of Will Smiths character in Independence Day?",
    number: "1",
    answer: "Captain Steven Hiller",
    fake1: "Captain Buzz Lightyear",
    fake2: "Captain Nemo",
    fake3: "Captain Ahab"},

    {question: "Which 1997 film stars Nicolas Cage, John Cusack, and John Malkovich?",
    number: "2",
    answer: "Con Air",
    fake1: "The Wickerman",
    fake2: "Ghost Rider",
    fake3: "Titanic"},

    {question: "What year was Forrest Gump released?",
    number: "3",
    answer: "1994",
    fake1: "1995",
    fake2: "1992",
    fake3: "2001"},

    {question: "Who is Keyser Soze in the film The Usual Suspects?",
    number:"4",
    answer:"Roger Verbal Kint played by Kevin Spacey",
    fake1: "Dean Keaton",
    fake2: "Michael Mcmanus",
    fake3: "Fred Fenster"},

    {question: "Which 90s movie featured the Looney Tunes?",
    number: "5",
    answer: "Space Jam",
    fake1: "The Matrix",
    fake2: "Waynes World",
    fake3: "American Pie"},

    {question: "Which 90s movie soundtrack is the best-selling soundtrack of all time?",
    number: "6",
    answer: "The Bodyguard",
    fake1: "The Sandlot",
    fake2: "Aladdin",
    fake3: "Galaxy Quest"}
];

var time = 10;
var incorrect = 0;
var correct = 0;
var unanswered = 0;
var intervalID;
var choice;

// on start...

    $("#start").on("click", start) 
    



function findValue(quest) {
    for (var i = 0; i < quest.length; i++) {
        if (quest[i].checked) {
             choice = quest[i].value
        }
    }    
}

function displayScores() {
    $(".starter").html("<h2>Your Score:")
    $(".questions").empty();
    $(".questions").html("<p>Correct: " + correct + "!</p><p>Incorrect: " + incorrect + "!</p><p>Unanswered: " + unanswered + "!</p>")

}

function stop() {
    clearInterval(intervalID);
};

function timeDown() {
    time--;
    $(".starter").html("<h2>TIME REMAINING:" + "<p>" + time + "</p></h2>" );
    if (time === 0) {
        stop();
        alert("TIMES UP!");
        
        var q1 = document.getElementsByName("1");
        var q2 = document.getElementsByName("2");
        var q3 = document.getElementsByName("3");
        var q4 = document.getElementsByName("4");
        var q5 = document.getElementsByName("5");
        var q6 = document.getElementsByName("6");
        // compares userchoices
        findValue(q1);
        if (choice === trivia[0].answer) {
            correct++;
            
            
        } 
       
        else if (choice === undefined) {
                
        }
        else {
            incorrect++;
            
        };
        findValue(q2);
        if (choice === trivia[1].answer) {
            correct++;
            
        }
        else if (choice === undefined) {
            
        }
        else {
            incorrect++;
            
        };
        
        findValue(q3);
        if (choice === trivia[2].answer) {
            correct++;
            
            
        }
        else if (choice === undefined) {
            
        }
        else {
            incorrect++;
            
        };
        
       
        findValue(q4);
        if (choice === trivia[3].answer) {
            correct++;
            
            
        }
        else if (choice === undefined) {
            
        }
        else {
            incorrect++;
            
        };
        findValue(q5);
        if (choice === trivia[4].answer) {
            correct++;
                    }
        else if (choice === undefined) {
            
        }
        else {
            incorrect++
        };
        findValue(q6);
        if (choice === trivia[5].answer) {
            correct++;
                        
        }
        else if (choice === undefined) {
            
        }    
        else {
            incorrect++;
            
        };
        displayScores();
        // alert("why")
    //   end of answer comparison
     }    
    
};





function start() {
    clearInterval(intervalID);
    intervalID = setInterval(timeDown, 1000);
    for (i = 0; i < trivia.length; i++) {
        $(".questions").append("<form name='userchoice' id='userchoice'><div class='row'><div class='col-4'><p>" + trivia[i].question + "</p></div><div class='col-2'>" + "<input type='radio' name='" + trivia[i].number + "' value='" + trivia[i].fake1 + "'>" + trivia[i].fake1 + "</div><div class='col-2'><input type='radio' name='" + trivia[i].number + "' value='" + trivia[i].fake2 + "'>" + trivia[i].fake2 + "</div><div class='col-2'><input type='radio' name='" + trivia[i].number + "' value='" + trivia[i].answer + "'>" + trivia[i].answer + "</div><div class='col-2'><input type='radio' name='" + trivia[i].number + "' value='" + trivia[i].fake3 + "'>" + trivia[i].fake3 + "</div></form>");
        // console.log(trivia[i].number)
    }
};