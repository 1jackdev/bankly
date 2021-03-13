const { numberWords, decades } = require("./numberWords");

function timeWord(time) {
  suffix = "pm";
  let splitTime = time.split(":");
  let hours = splitTime[0];
  let hoursNum = parseInt(hours);
  let minutes = splitTime[1];
  if (hours === "12" && minutes === "00") {
    return "noon";
  } else if (hours === "00" && minutes === "00") {
    return "midnight";
  }

  if (hoursNum < 12) {
    suffix = "am";
  } else if (hoursNum > 12) {
    hours = hoursNum - 12;
  }

  if (minutes === "00") {
    suffix = "o'clock";
  }

  let wordsForHours = handleHours(hours);
  console.log(minutes)
  let wordsForMinutes = handleMinutes(minutes);

  return wordsForHours + " " + wordsForMinutes + suffix;
}

function handleMinutes(minutes) {
  let minutesInWords = "";
  minutes.split("")
  if (minutes[0] === "0") {
    minutesInWords = "oh ";
    minutesInWords + numberWords[parseInt(minutes[1])];
  } else if (minutes[0] === "1") {
    minutesInWords + numberWords[parseInt(minutes)];
  } else {
    minutesInWords + decades[parseInt(minutes[0])];
    minutesInWords + numberWords[parseInt(minutes[1])];
  }
  console.log(minutesInWords)
  return minutesInWords;
}

function handleHours(hours) {
  let hoursInWords = numberWords[hours];
  return hoursInWords;
}

module.exports = timeWord;
