export function makeHourMinStr(date) {
  const hour = changeHour(date.getHours());
  const time = checkHour(date.getHours());
  const timeStr = time + " " + hour + ":" + date.getMinutes();

  return timeStr;
}

function changeHour(hour) {
  if (hour > 12) {
    return hour - 12;
  }

  return hour;
}

function checkHour(hour) {
  if (hour >= 12) {
    return "오후";
  } else {
    return "오전";
  }
}
