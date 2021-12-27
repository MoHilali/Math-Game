var playing = false;
var score, timeRemaining, action;

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

//functions

//start Counter
function startCountdown() {
     action = setInterval(function() {
          timeRemaining --;
          document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
          if(timeRemaining == 0) {//game over
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
function hide(id){
     document.getElementById(id).style.display = "none";
}

//show elements
function show(id){
     document.getElementById(id).style.display = "block"
}

//generate question and multiple answers

function generateQA() {

}

// timeleft?
//yes -> continue
//no -> gameover
//change button to resert
//generate new Q&A


//if we click on answer box
//if we are playing
//correct?
//yes
//increase score
//show correct box for 1sec
//generate new Q&A
//no
//show try again box for 1sec
