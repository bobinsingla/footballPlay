function scores() {
  var score1;
  var score2;
      score1 = Math.floor(Math.random() * 10);
      score2 = Math.floor(Math.random() * 10);
  document.getElementById("goal1").value = score1;
  document.getElementById("goal2").value = score2;
  if(score1 == score2){
        document.getElementById("status").value = "Match Draw";
    }else if(score1>score2){
        document.getElementById("status").value = "Team A Wins";
    }else{
        document.getElementById("status").value = "Team B Wins";
    }
}
