$(document).ready(function() {

  var userPick, compPick, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9
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

  })

  $(".divTableCell").click(function() {

    $(this).html(userPick);
    boardCheck();
    checkWin();
    turn += 1;
    aI();
    boardCheck();
    checkWin();

  })

  function aI() {
    switch (true) {
      case turn == 1 && $('.cell1').html() !== userPick || $('.cell1').html() == "&nbsp;":
        $(".cell1").html(compPick);
        turn += 1
        break;
      case turn == 3 && $('.cell2').html() !== userPick || $('.cell2').html() == "&nbsp;":
        $(".cell2").html(compPick);
        turn += 1
        break;
      case turn == 4 && $('.cell3').html() !== userPick || $('.cell3').html() == "&nbsp;":
        $(".cell3").html(compPick);
        turn += 1;
        break;
      case turn == 5 && $('.cell4').html() !== userPick || $('.cell4').html() == "&nbsp;":
        $(".cell4").html(compPick)
        turn += 1;
        break;
      case turn == 6 && $('.cell5').html() !== userPick || $('.cell5').html() == "&nbsp;":
        $(".cell5").html(compPick)
        turn += 1;
        break;
      case turn == 7 && $('.cell6').html() !== userPick || $('.cell6').html() == "&nbsp;":
        $(".cell6").html(compPick)
        turn += 1;
        break;
      case turn == 8 && $('.cell7').html() !== userPick || $('.cell7').html() == "&nbsp;":
        $(".cell7").html(compPick)
        turn += 1;
        break;
      case turn == 9 && $('.cell8').html() !== userPick || $('.cell8').html() == "&nbsp;":
        $(".cell8").html(compPick)
        turn += 1;
        break;
      case turn == 10 && $('.cell9').html() !== userPick || $('.cell9').html() == "&nbsp;":
        $(".cell9").html(compPick)
        turn += 1;
        break;
    };

  };

  boardCheck = function() {
    cell1 = $('.cell1').html();
    cell2 = $('.cell2').html();
    cell3 = $('.cell3').html();
    cell4 = $('.cell4').html();
    cell5 = $('.cell5').html();
    cell6 = $('.cell6').html();
    cell7 = $('.cell7').html();
    cell8 = $('.cell8').html();
    cell9 = $('.cell9').html();
  };

  function checkWin() {

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
      alert("You win!");
      $("button").show();
      $(".divTableCell").html("&nbsp;");
      $(".divTable").hide();
      userPick = "";
      compPick = "";

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
      alert("You lose!");
      $("button").show();
      $(".divTableCell").html("&nbsp;");
      $(".divTable").hide();
      userPick = "";
      compPick = "";
    }

    /*For draw: add event listeners on each cell. Add var win to both winning scenarios. win = false when it's a draw. */

   /* else if ( (cell1 == userPick) || (cell1 == compPick) && (cell2 == userPick) || (cell2 == compPick) && (cell3 == userPick) || (cell3 == compPick) && (cell4 == userPick) || (cell4 == compPick) && (cell5 == userPick) || (cell5 == compPick) && (cell6 == userPick) || (cell6 == compPick) && (cell7 == userPick) || (cell7 == compPick) && (cell8 == userPick) || (cell8 == compPick) && (cell9 == userPick) || (cell9 == compPick)
    ) {
      alert("It's a draw!")
      $("button").show();
      $(".divTableCell").html("&nbsp;");
      $(".divTable").hide();
      userPick = "";
      compPick = "";
    } */

  };

});
