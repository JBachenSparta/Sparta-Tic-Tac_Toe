//jquery declaration equivilant to DOMContentReady
$(function(event){

  var turn1 = $("td")
  var turn = "X";
  var usedSquares = [];

//Setting parameters player 1 and player 2, used to determine winner of each game
  function descision (player1, player2) {
    player1 = [];
    player2 = [];
    for (var i = 0; i < usedSquares.length; i++) {
      if (usedSquares[i] % 2 == 0) {
        player1.push(usedSquares[i])
      };
      if (usedSquares[i] % 2 == 1)  {
        player2.push(usedSquares[i])
      };
      //if usedSquares array is length 0, player1 and player2 arrays are also zero, enables reset function to work
      if (usedSquares.length == 0 ){
        player1 = [];
        player2 = [];
      }
    }
  }

//jquery each iterates through and applies listening function allowing "click" to be heard on each square of table
  $(turn1).each(function (index, grid) {
    $(this).on("click", function (){
      //if usedSquares array doesn't include the data-num of square just clicked all is good
      if (usedSquares.includes($(this).attr("data-num")) == false) {
        //if turn is "X" proceed
        if (turn == "X") {
          $(this).html("X").addClass("X")
          turn = "O"
          usedSquares.push($(this).attr("data-num"));
          $(".playerTurn").html("It is O's turn")
        }
        //if turn is "O" proceed
        else if (turn =="O"){
          $(this).html("O").addClass("O")
          $(".playerTurn").html("It is X's turn")
          turn = "X"
          usedSquares.push($(this).attr("data-num"));
        }
      }

      //if usedSquares array does include the data-num of square just clicked square has already been played, flash screen red
      else if (usedSquares.includes($(this).attr("data-num")) == true) {
        $("body").css("background-color", "red");
        setInterval(function () {
          $("body").css("background-color", "white");
        }, 200);
      }
        descision();
    })
  })

  //resets all arrays, removes html and classes from table, flashed screen green
  $("#reset").on("click", function (){
    usedSquares = [];
    $("td").removeClass("O").html("").removeClass("X");

    $("body").css("background-color", "green");
    setInterval(function () {
      $("body").css("background-color", "white");
    }, 200);

  })

})
