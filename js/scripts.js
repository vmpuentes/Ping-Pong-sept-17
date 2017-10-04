//Business Logic

//---My first idea was to make an array of the ping pong phrases and then call upon them
//---with a call back function in the for loop, and using the .append method to display them in
//---in the HTML file.
//var pingPongArray = ["Ping", "Pong", "PING-PONG"];
//var outputArray = [(<li>" "</li>)];
function pingPong (userInput) {
  var outputArray = [];
  for (var i = 1;  i <= userInput; i ++ ) {
    if (i % 15 === 0) {
      outputArray.push("PING!");
    } else if (i % 5 === 0) {
      outputArray.push("PONG!");
    } else if (i % 3 === 0) {
      outputArray.push("PING-PONG");
    // } else if (isNaN(0) === true) {
    //   alert ("Please enter a number");
    } else {
      outputArray.push(i);
      console.log(outputArray);
    }
  }
  return outputArray;
}


//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#numberInput").val());
    pingPong(userInput).forEach(function(number) {
    $("#resultOutput").append("<li>" + number + "</li>");
    });
  });
});
//   alert(outputArray);
// });

// var pingPongResult = [];
//  pingPongResult.forEach(function(userInput) {

//other posibility for line 32
    // var pingPongResult = [];
    //   outputArray.forEach(function(outputArray) {
    //     pingPongResult.push(outputArray);
    //   });
//line 33 could be
     //var pingPongResult = pingPong(userInput) {
    //
    // }
