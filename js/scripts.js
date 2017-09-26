//Business Logic

//---My first idea was to make an array of the ping pong phrases and then call upon them
//---with a call back function in the for loop, and using the .append method to display them in
//---in the HTML file.
//var pingPongArray = ["Ping", "Pong", "PING-PONG"];
//var outputArray = [(<li>" "</li>)];
for (var i = 0, i<= (pingPong.length), i ++ )
  if (i % 3 === 0) {
    var outputNumber = pingPongArray.splice(pos, 0).append('<img src="img/gump.png">PING-PONG!').hide().fadein(200);
  ] else if (i % 5 === 0) {
    var outPutNumber = pingPongArray.splice(pos, 1).append('<img src="img/PONG').hide().fadein(200);
  } else if (i % 15 === 0) {
    var outPutNumber = pingPongArray.splice(pos, 2).append('PING-PONG').hide().fadein(200);
  }
return outputArray;
}


//User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    event.preventDefault();
    console.log(userInput);

  }
}
