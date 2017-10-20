$(document).ready(function () {
  
  var turns = 2;
  var turn1 = 0;
  var turn1P2 = 0;
  var strike = 0;
  var strike2 = 0;
  var spare = 0;
  var spare2 = 0;
  var numbers = 0;
  var totalscore1 = 0;
  var scorecard1 = [];
  var runningtotal1 = [];
  var totalscore2 = 0;
  var scorecard2 = [];
  var runningtotal2 = [];
  var numbers2 = 0;
  var winner = "";
  var gamecard
  
  for(var i = 0; i <= 12; i++) {
    
    if(turns == 2) {
      turn1 = Math.round(Math.random() * 10);
      turn1P2 = Math.round(Math.random() * 10);
      numbers += turn1;
      numbers2 += turn1P2;
      turns = turns - 1;
      
        if(turn1 == 10) {
        strike =  Math.round(Math.random() * 10); 
        numbers += strike;
        scorecard1 += "X, ";
      } if(turn1P2 == 10) {
        strike2 = Math.round(Math.random() * 10);
        numbers2 += strike2;
        scorecard2 += "X, ";
      }
      
    } if(turns == 1) {
      
      var turn2 = Math.round(Math.random() * 10);
      var turn2P2 = Math.round(Math.random() * 10);
      numbers += turn2;
      numbers2 += turn2P2;
      turns = turns - 1;
      
      if(turn1 + turn2 != 10 && turn1 != 10) {
        scorecard1 += turn1 + " " + turn2 + ", ";
      } if(turn1P2 + turn2P2 != 10 && turn1P2 != 10) {
        scorecard2 += turn1P2 + " " + turn2P2 + ", ";
      } //check for spare
      if(turn1 + turn2 == 10) {
        spare =  Math.round(Math.random() * 10); 
        numbers += spare;
        scorecard1 += "/" + spare + ", ";
      } if(turn1P2 + turn2P2 == 10) {
        spare2 = Math.round(Math.random() * 10); 
        numbers2 += spare2;
        scorecard2 += "/" + spare2 + ", ";
      }
    } if (turns == 0) {
     totalscore1 += numbers;
     runningtotal1 += totalscore1 + ", ";
     totalscore2 += numbers2;
     runningtotal2 += totalscore2 + ", ";
     numbers2 = 0; 
     numbers = 0;
     turns += 2;
   } if(i == 9) {
     break;
   }
  } // END OF FOR LOOP
  
  if(totalscore1 > totalscore2) {
    winner = "Player1 Wins!!" + " Total score: " + totalscore1;
  } else if(totalscore2 > totalscore1) {
    winner = "Player2 Wins!!" + " Total score: " + totalscore2;
  }  else if(totalscore2 == totalscore1) {
    winner = "Its a Draw!!";
  }
   
  var score1 =  scorecard1.split(',');
  var total1 = runningtotal1.split(',');
  var score2 = scorecard2.split(',');
  var total2 = runningtotal2.split(',');
  
  
      var count = 0;
      var button = document.getElementById("black");
      var display = document.getElementById("displayCount");

      button.onclick = function(){
        count++;
        display.innerHTML = count;
      }
  
    $('.blue').click(function() {
     switch(count) {
       case 1:
        $('#frame1').html(score1[0]); 
        $('#marker0').html(total1[0]);
         break;
       case 2:
        $('#2frame1').html(score2[0]); 
        $('#2marker0').html(total2[0]);
         break;
       case 3:
        $('#frame2').html(score1[1]); 
        $('#marker1').html(total1[1]);
         break;
       case 4:
        $('#2frame2').html(score2[1]); 
        $('#2marker1').html(total2[1]);
         break;
       case 5:
        $('#frame3').html(score1[2]); 
        $('#marker2').html(total1[2]);
         break;
       case 6:
        $('#2frame3').html(score2[2]); 
        $('#2marker2').html(total2[2]);
         break;
       case 7:
        $('#frame4').html(score1[3]); 
        $('#marker3').html(total1[3]);
         break;
       case 8:
        $('#2frame4').html(score2[3]); 
        $('#2marker3').html(total2[3]);
         break;
       case 9:
        $('#frame5').html(score1[4]); 
        $('#marker4').html(total1[4]);
         break;
       case 10:
        $('#2frame5').html(score2[4]); 
        $('#2marker4').html(total2[4]);
         break;
       case 11:
        $('#frame6').html(score1[5]); 
        $('#marker5').html(total1[5]);
         break;
       case 12:
        $('#2frame6').html(score2[5]); 
        $('#2marker5').html(total2[5]);
         break;
       case 13:
        $('#frame7').html(score1[6]); 
        $('#marker6').html(total1[6]);
         break;
       case 14:
        $('#2frame7').html(score2[6]); 
        $('#2marker6').html(total2[6]);
         break;
       case 15:
        $('#frame8').html(score1[7]); 
        $('#marker7').html(total1[7]);
         break;
       case 16:
        $('#2frame8').html(score2[7]); 
        $('#2marker7').html(total2[7]);
         break;
       case 17:
        $('#frame9').html(score1[8]); 
        $('#marker8').html(total1[8]);
         break;
       case 18:
        $('#2frame9').html(score2[8]); 
        $('#2marker8').html(total2[8]);
         break;
       case 19:
        $('#frame10').html(score1[9]); 
        $('#marker9').html(total1[9]);
         break;
       case 20:
        $('#2frame10').html(score2[9]); 
        $('#2marker9').html(total2[9]);
        $('#yourscore').html(winner);
        $(".blue").html("Reset Game!");
         break;
       case 21:
         location.href=location.href;
         break;
         
  } // end of switch
     
 }); //end of click function
                   

}); //end of document.ready

