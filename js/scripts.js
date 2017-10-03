//Business Logic

//---My first idea was to make an array of the ping pong phrases and then call upon them
//---with a call back function in the for loop, and using the .append method to display them in
//---in the HTML file.
//var pingPongArray = ["Ping", "Pong", "PING-PONG"];
//var outputArray = [(<li>" "</li>)];
function PingPong (userInput) {
  var outputArray = [(<li>" "</li>)];
for (var i = 1, i<= (intialInput), i ++ )
  if (i % 3 === 0) {
    outputArray.push('<img src="img/ping1.jpg">PING!')
  ] else if (i % 5 === 0) {
    outputArray.push('<img src="img/pong1.jpg">Pong!')
  } else if (i % 15 === 0) {
    outputArray.push('<img src="img/ping-pong.jpg">PING-PONG')
  } else {
    output.push(i);
  }
return outputArray;
  }
}

//User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    var pingPongResult = PingPong(userInput);
    pingPongResult.forEach(userInput) {
      $("#resultOutput").append("<li>" +  + "</li>");
    }
  }
  event.preventDefault();
}
