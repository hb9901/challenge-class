export function makeDateStr() {
  const date = new Date();
  const hour = changeHour(date.getHours());
  const time = checkHour(date.getHours());
  const dateStr =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일, " +
    time +
    " " +
    hour +
    ":" +
    date.getMinutes();

  return dateStr;
}

export function makeHourMinStr() {
  const date = new Date();
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
