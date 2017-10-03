//Business Logic

//---My first idea was to make an array of the ping pong phrases and then call upon them
//---with a call back function in the for loop, and using the .append method to display them in
//---in the HTML file.
//var pingPongArray = ["Ping", "Pong", "PING-PONG"];
//var outputArray = [(<li>" "</li>)];
function PingPong (userInput) {
  var outputArray = [ ];
for (var i = 1; i<= userInput.length; i ++ ) {
  if (i % 3 === 0) {
    outputArray.push("PING!");
  ] else if (i % 5 === 0) {
    outputArray.push("PONG!");
  } else if (i % 15 === 0) {
    outputArray.push("PING-PONG");
  } else if (isNaN(0) === true) {
  alert ("Please enter a number");
  } else {
    output.push(i);
    return outputArray;
  }
}

//User Logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
      event.preventDefault();
    var userInput = parseInt($("#numberInput").val());
    var pingPongResult = PingPong(userInput);
    pingPongResult.forEach(function(userInputs) {
      $("#resultOutput").append("<li>" + userInputs  + "</li>");
    });
  });
});
