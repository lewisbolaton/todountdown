var scheduleStringA = '30 Jan 2021 12:00';
var scheduleStringB = '1 Feb 2021 23:45';

const countdown = (scheduleString, documentId) => {
	const timezoneOffset = 8 * 60 * 60 * 10000;

  var current = new Date();
  var schedule = new Date(scheduleString);
  var difference = schedule - current;
  var differenceInDays = Math.floor((schedule.getTime() + timezoneOffset) / 8.64e7) - Math.floor((current.getTime() + timezoneOffset) / 8.64e7);
  difference = difference - differenceInDays * (8 * 60 * 60 * 1000);
  var hours = Math.floor(difference / (1000 * 60 * 60));
  var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(difference % (1000 * 60) / 1000);
  document.getElementById(documentId).innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's';
}

var countdownA = setInterval(() => countdown(scheduleStringA, 'countdowna'), 1000);
var countdownB = setInterval(() => countdown(scheduleStringB, 'countdownb'), 1000);
