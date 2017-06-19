$(document).ready(function() {

  var userPick, compPick, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9;
  var selectedCells = []
  var turn = 0;

  $('#option1, #option2').click(function() {
    if (this.id == 'option1') {
      userPick = "X";
      compPick = "O";
    } else if (this.id == 'option2') {
      userPick = "O";
      compPick = "X";
    }

  });

  $("#option1, #option2").on("click", function() {
    $("#option1, #option2").hide()
  })

  $(".reset").click(function() {

    $("button").show();
    $(".divTableCell").html("&nbsp;");
    $(".divTable").show();
    userPick = "";
    compPick = "";
    turn = 0;

  })

  $(".divTableCell").click(function() {

    $(this).html(userPick);
    selectedCells.push(this.id)
    boardCheck();
    checkWin();
    turn += 1;
    aI();
    boardCheck();
    checkWin();

  })

  function aI() {
    switch (true) {
      case turn == 1 && $('#1').html() !== userPick || $('#1').html() == "&nbsp;":
        $("#1").html(compPick);
        turn += 1
        break;
      case turn == 2 && $('#2').html() !== userPick || $('#2').html() == "&nbsp;":
        $("#2").html(compPick);
        turn += 1
        break;
      case turn == 3 && $('#3').html() !== userPick || $('#3').html() == "&nbsp;":
        $("#3").html(compPick);
        turn += 1;
        break;
      case turn == 4 && $('#4').html() !== userPick || $('#4').html() == "&nbsp;":
        $("#4").html(compPick)
        turn += 1;
        break;
      case turn == 5 && $('#5').html() !== userPick || $('#5').html() == "&nbsp;":
        $("#5").html(compPick)
        turn += 1;
        break;
      case turn == 6 && $('#6').html() !== userPick || $('#6').html() == "&nbsp;":
        $("#6").html(compPick)
        turn += 1;
        break;
      case turn == 7 && $('#7').html() !== userPick || $('#7').html() == "&nbsp;":
        $("#7").html(compPick)
        turn += 1;
        break;
      case turn == 8 && $('#8').html() !== userPick || $('#8').html() == "&nbsp;":
        $("#8").html(compPick)
        turn += 1;
        break;
      case turn == 9 & $('#9').html() !== userPick || $('#9').html() == "&nbsp;":
        $("#9").html(compPick)
        turn += 1;
        break;
    };

  };

  boardCheck = function() {
    cell1 = $('#1').html();
    cell2 = $('#2').html();
    cell3 = $('#3').html();
    cell4 = $('#4').html();
    cell5 = $('#5').html();
    cell6 = $('#6').html();
    cell7 = $('#7').html();
    cell8 = $('#8').html();
    cell9 = $('#9').html();
  };

  function checkWin() {
    var win;
    if (
      (cell7 == userPick && cell8 == userPick && cell9 == userPick) ||
      (cell1 == userPick && cell2 == userPick && cell3 == userPick) ||
      (cell4 == userPick && cell5 == userPick && cell6 == userPick) ||
      (cell1 == userPick && cell4 == userPick && cell7 == userPick) ||
      (cell2 == userPick && cell5 == userPick && cell8 == userPick) ||
      (cell3 == userPick && cell6 == userPick && cell9 == userPick) ||
      (cell1 == userPick && cell5 == userPick && cell9 == userPick) ||
      (cell3 == userPick && cell5 == userPick && cell7 == userPick)
    ) {
      alert("You win! Press Reset to play again!");
      $("button").show();
      $(".divTableCell").html("&nbsp;");
      $(".divTable").hide();
      userPick = "";
      compPick = "";
      win = true;

    } else if (
      (cell7 == compPick && cell8 == compPick && cell9 == compPick) ||
      (cell1 == compPick && cell2 == compPick && cell3 == compPick) ||
      (cell4 == compPick && cell5 == compPick && cell6 == compPick) ||
      (cell1 == compPick && cell4 == compPick && cell7 == compPick) ||
      (cell2 == compPick && cell5 == compPick && cell8 == compPick) ||
      (cell3 == compPick && cell6 == compPick && cell9 == compPick) ||
      (cell1 == compPick && cell5 == compPick && cell9 == compPick) ||
      (cell3 == compPick && cell5 == compPick && cell7 == compPick)
    ) {
      alert("You lose! Press Reset to play again!");
      $("button").show();
      $(".divTableCell").html("&nbsp;");
      $(".divTable").hide();
      userPick = "";
      compPick = "";
      win = true;

    } else if (win !== true && turn == 9) {
      alert("It's a draw! Press Reset to play again!")
    }

  };

});
