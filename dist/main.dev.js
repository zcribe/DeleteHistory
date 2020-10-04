"use strict";

var MINUTE = 60 * 1000;
var HOUR = 60 * 60 * 1000;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var BIWEEK = WEEK * 2;
var MONTH = DAY * 30;
var selection;
var selectionTime = MINUTE;

function oneMinuteAgo() {
  return Date.now() - selectionTime;
}

function deleteHistory() {
  browser.history.deleteRange({
    startTime: oneMinuteAgo(),
    endTime: Date.now()
  });
}

function converToTime(word) {
  if (word === "hour") {
    selectionTime = HOUR;
  } else if (word === "day") {
    selectionTime = DAY;
  } else if (word === "week") {
    selectionTime = WEEK;
  } else if (word === "biweek") {
    selectionTime = BIWEEK;
  } else if (word === "month") {
    selectionTime = MONTH;
  }
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("reset")) {
    deleteHistory();
  }
}, false);
var selectElement = document.querySelector('#timeSelector');
selectElement.addEventListener('change', function (event) {
  var result = document.querySelector('#timeDisplay');
  result.textContent = "".concat(event.target.value);
  selection = event.target.value;
});