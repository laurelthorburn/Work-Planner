//Setting current time as a global function
var currentTime = moment();

function updateClock() {
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}
setInterval(updateClock, 1000);

//Console logging each data-time
$('[data-time]').each(function() {
    console.log(typeof($(this).data('time'))); //number = type of
  }) //data is a number

 var currentHour = currentTime.format('h');
 console.log(typeof(currentHour)); //works, says it's a string so comparing number to string

// if((document.data("time", 9)) == currentHour){
//     console.log(($(this).data('time')));
//     console.log(currentHour);
//    $('.form-control').css("background-color", "#ff6961"); //confirmed css works
// };

console.log($( "body" ).data("9"));