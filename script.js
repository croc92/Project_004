// the date we're counting down to
var myBirthday = new Date("07/16/2022").getTime();

// update countdown every second
var x = setInterval(function() {

// today's date & time
var now = new Date().getTime();

// time difference in "MILLISECONDS"
// 1 DAY = 24 H = (24 * 60) MIN = 24 * 60 * 60 * 1000 MILLISECONDS
var difference = myBirthday - now;

// Time calculations for Day, hours, min, sec.
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000));
var minutes = Math.floor((difference % (1000 * 60 * 60)) / (60 * 1000));
var seconds = Math.floor((difference % (1000 * 60)) / 1000);

// output the result in an element with #id
document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

// when the count ends, write this text
if(difference < 0) {
  clearInterval(x);
  document.getElementById("days").innerHTML = "0";
  document.getElementById("hours").innerHTML = "0";
  document.getElementById("minutes").innerHTML = "0";
  document.getElementById("seconds").innerHTML = "0";
  }

}, 1000);
