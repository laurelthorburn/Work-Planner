//Setting current time as a global function
var currentTime = moment();

function updateClock() {
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}
setInterval(updateClock, 1000);

//Console logging each data-time
$('[data-time]').each(function() {
    console.log(typeof($(this).data('time')));
  }) //data is a number

 var currentHour = currentTime.format('h');
 console.log(currentHour); //works

if($('[data-time]') == currentHour){
    console.log(($(this).data('time')));
    console.log(currentHour);
   $('.form-control').css('background', 'ff6961');
};