//function for adding total scores.
var addResults = function(results){
  //check for NaN values, i.e, non-answered questions
  var finalResults=[];
  results.forEach(function(result){
    if(isNaN(result)){
      finalResults.push(0);
    }else{
      finalResults.push(result);
    }
  });
  var totalScore = 0;
  for(var i = 0; i<finalResults.length; i++){
    totalScore += finalResults[i];
  }
  return totalScore;
};

var gradecomment =function(score){
  var gradecomment;
  if(score>=80){
    gradeComment ="Congratulations!! You have done Excellent.";
  }else if(score>=50){
    gradeComment=" You have passed fairly.";
  }else{
    gradeComment = "You have failed. Please try again.";
  }
  return gradeComment;
};
$(document).ready(function(){

  $("#form form").submit(function(event){
    event.preventDefault();
    //array for storing results
    var results =[];
    // for loop for entering values from the form to the array
    for(var index =0; index<10; index++){
      results[index]= parseInt($("input:radio[name=question"+(index+1)+"]:checked").val());
    }

     var totalScore = addResults(results);
     var grade =gradeComment(totalScore);
     $("#scoreResult").text(totalScore);
     $("#extraInfo").text(grade);

     $("#scoreboard").show();

   }
