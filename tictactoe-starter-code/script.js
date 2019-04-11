
$(function(event){

  var turn1 = $("td")
  var turn = "X";
  var usedSquares = [];

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
      if (usedSquares.length == 0 ){
        player1 = [];
        player2 = [];
      }
    }
      console.log(player1, player2);
  }


  $(turn1).each(function (index, grid) {
    $(this).on("click", function (){
      if (usedSquares.includes($(this).attr("data-num")) == false) {
        if (turn == "X") {
          $(this).html("X").addClass("X")
          turn = "O"
          usedSquares.push($(this).attr("data-num"));
          $(".playerTurn").html("It is O's turn")
        }

        else if (turn =="O"){
          $(this).html("O").addClass("O")
          $(".playerTurn").html("It is X's turn")
          turn = "X"
          usedSquares.push($(this).attr("data-num"));
        }
      }

      else if (usedSquares.includes($(this).attr("data-num")) == true) {
        $("body").css("background-color", "red");
        setInterval(function () {
          $("body").css("background-color", "white");
        }, 200);
      }
        descision();
    })
  })

  $("#reset").on("click", function (){
    console.log ("penis")
    var turn = "X";
    usedSquares = [];
    $("td").removeClass("O").html("").removeClass("X");

    $("body").css("background-color", "green");
    setInterval(function () {
      $("body").css("background-color", "white");
    }, 200);

  })

})
