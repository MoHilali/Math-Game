var playing = false;
var score, timeRemaining, action, correctAnswer;;

//if we click on the start/reset
document.getElementById("startreset").onclick = function() {
     //if we are playing
     if (playing) {
          location.reload(); //reload page
     } else { //if we are not playing
          //change mode to playing
          playing = true;
          //set score to zero
          score = 0;
          document.getElementById("scoreValue").innerHTML = score;
          //show countdown box
          show("timeremaining");
          timeRemaining = 60;
          document.getElementById("timeremainingvalue").innerHTML = timeRemaining;

          //hide game over box
          hide("gameover")

          //change button to reset
          document.getElementById("startreset").innerHTML = "Reset Game";

          //start countdown
          startCountdown();

          //generate a new Q&A
          generateQA();
     }
}

//clicking on an answer box
for (var i = 1; i < 5; i++) {
     document.getElementById("box"+i).onclick = function() {
          // check if we are playing
          if (playing) { //yes
               if (this.innerHTML == correctAnswer) { //correct answer
                    // increase score by 1
                    score++;

                    document.getElementById("scoreValue").innerHTML = score;
                    // hide wrong box and show correct box
                    hide("wrong");
                    show("correct");
                    setTimeout(function() {
                         hide("correct");
                    }, 1000);

                    //Generate new Q&A
                    generateQA();

               } else { //wrong answer
                    hide("correct");
                    show("wrong");
                    setTimeout(function() {
                         hide("wrong");
                    }, 1000);
               }
          }
     }
}
//functions

//start Counter
function startCountdown() {
     action = setInterval(function() {
          timeRemaining--;
          document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
          if (timeRemaining == 0) { //game over
               stopCountdown();
               show("gameover");
               document.getElementById("gameover").innerHTML = "<p> game over! </p> <p>Your score is: " + score + ".</p>";
               hide("timeremaining");
               hide("correct");
               hide("wrong");
               playing = false;
               document.getElementById("startreset").innerHTML = "Start Game";
          }
     }, 1000);
}

//stop counter
function stopCountdown() {
     clearInterval(action);
}

//hide elements
function hide(id) {
     document.getElementById(id).style.display = "none";
}

//show elements
function show(id) {
     document.getElementById(id).style.display = "block"
}

//generate question and multiple answers

function generateQA() {
     var x = 1 + Math.round(Math.random() * 9);
     var y = 1 + Math.round(Math.random() * 9);
     correctAnswer = x * y;

     document.getElementById("question").innerHTML = x + "x" + y;

     var correctPosition = 1 + Math.round(Math.random() * 3);
     document.getElementById("box" + correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

     //fill other boxes with wrong answers
     var answers = [correctAnswer];
     for (var i = 1; i < 5; i++) {
          if (i != correctPosition) {
               var wrongAnswer;
               do {
                    wrongAnswer = (1 + Math.round(Math.random() * 9)) * (1 + Math.round(Math.random() * 9)); // a wrong answer
               } while (answers.indexOf(wrongAnswer) > -1);
               answers.push(wrongAnswer);
               document.getElementById("box" + i).innerHTML = wrongAnswer;
          }
     }
}
