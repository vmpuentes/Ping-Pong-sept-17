//Business Logic

//---My first idea was to make an array of the ping pong phrases and then call upon them
//---with a call back function in the for loop, and using the .append method to display them in
//---in the HTML file.
//var pingPongArray = ["Ping", "Pong", "PING-PONG"];
//var outputArray = [(<li>" "</li>)];
function PingPong (intialInput) {
  var outputArray = [(<li>" "</li>).hide().fadein(200))];
for (var i = 1, i<= (intialInput), i ++ )
  if (i % 3 === 0) {
    outputArray.push('<img src="img/ping1.jpg">PING!')
  ] else if (i % 5 === 0) {
    outputArray.push('<img src="img/pong1.jpg">Pong!')
  } else if (i % 15 === 0) {
    outputArray.push('<img src="img/ping-pong.jpg">PING-PONG')
  }
return outputArray;
  }
}

//User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var userInput = parseInt($("#numberInput").val());
    event.preventDefault();
    

  }
}
