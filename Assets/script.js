function updateClock() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}
setInterval(updateClock, 1000);
