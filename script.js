// time difference in "MILLISECONDS"
// 1 DAY = 24 H = (24 * 60) MIN = 24 * 60 * 60 * 1000 MILLISECONDS

// IN JAVASCRIPT month is zero-based, so april is 03 th month xd xd
// 11-Aug-2021  now.getDate() =>> 11, now.getDay() =>> 3 (3rd day of the week)

// the date we're counting down to
const bDay = 16;
const bMonth = 7;
const bYear = 1992;
const now = new Date();
const thisYear = new Date().getFullYear();
const comingYear = new Date().getFullYear() + 1;

// if Birthday is still on this year
if (now.getMonth() + 1 < bMonth || (now.getMonth() + 1 == bMonth && now.getDate() < bDay)) {

  var myBirthday = new Date(`${bMonth}/${bDay}/${now.getFullYear()}`);
  console.log('myBD is on1', myBirthday); // 7-16-2021

} else if (now.getMonth() + 1 == bMonth && now.getDate() == bDay) { // on the exact day
  var myBirthday = new Date(`${bMonth}/${bDay}/${now.getFullYear()}`);
  console.log('myBD is on2', myBirthday);
  document.getElementById("message").style.display = 'none';
  document.getElementById("table").style.display = 'none';
  document.getElementById("bd-message").style.display = 'block';
  document.getElementById("age").innerHTML = thisYear - bYear;
  // n-th birthday, assigning the right text for ordinal number
  let myAge = thisYear - bYear;
  if (myAge !== 11 && myAge % 10 == 1) {
    // if my age ends with 1, and not 11;
    document.getElementById('nth').innerHTML = 'st';
  } else if (myAge !== 12 && myAge % 10 == 2) {
    // if my age ends with 2, and not 12;
    document.getElementById('nth').innerHTML = 'nd';
  } else if (myAge !== 13 && myAge % 10 == 3) {
    // if my age ends with 3, and not 13;
    document.getElementById('nth').innerHTML = 'rd';
  } else {
    // everything else
    document.getElementById('nth').innerHTML = 'th';
  }

} else { // Birthday was at least 24h ago, countdown to next year

  var myBirthday = new Date(`${bMonth}/${bDay}/${comingYear}`);
  console.log('myBD is on3', myBirthday);

}


function countDown() {

  let difference = (myBirthday).getTime() - new Date().getTime();

  // units
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Time calculations for days, hours, mins, sec.
  const days = Math.floor(difference / day);
  const hours = Math.floor((difference % (day)) / (hour));
  const minutes = Math.floor((difference % (hour)) / (minute));
  const seconds = Math.floor((difference % (minute)) / second);

  // output the result in an element with #id
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}

setInterval(countDown, 1000);
