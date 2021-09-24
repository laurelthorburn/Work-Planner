var inputOne = document.getElementsByTagName("nineAM");

//Setting current time as a global function
var currentTime = moment();

function updateClock() {
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}
setInterval(updateClock, 1000);

//Console logging each data-time


var currentHour = Number(currentTime.format('H'));
console.log(typeof(currentHour)); //works, says it's a string so comparing number to string, used number() to convert from string to # sickkk


// $('[data-time]').each(function(i) {
//     console.log($(this).data('time')); // number

//time block
if(currentHour === 9){
    $('#0').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 9){
    $('#0').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 10){
    $('#1').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 10){
    $('#1').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 11){
    $('#2').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 11){
    $('#2').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 12){
    $('#3').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 12){
    $('#3').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 13){
    $('#4').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 13){
    $('#4').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 14){
    $('#5').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 14){
    $('#5').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 15){
    $('#6').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 15){
    $('#6').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 16){
    $('#7').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 16){
    $('#7').css("background-color", "#77dd77"); //confirmed css works
};
if(currentHour === 17){
    $('#8').css("background-color", "#ff6961"); //confirmed css works
} else if(currentHour < 17){
    $('#8').css("background-color", "#77dd77"); //confirmed css works
};

//local storage
$("#btn0").click(
    function() {
        inputOne = inputOne.value;
        console.log(inputOne);
       // must stringify the object before save
       localStorage.setItem('9AM', JSON.stringify(inputOne));
    }
);

// $("#loadGame").click(
//     function() {
//        var save9AM = JSON.parse(localStorage.getItem('9AM'));
//        alert(save9AM);
//     }
// );
