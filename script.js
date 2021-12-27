var playing = false;
var score;

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
          document.getElementById("timeremaining").style.display = "block";
          //reduce time by 1 sec in loops
          document.getElementById("startreset").innerHTML = "Reset Game";
     }
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
