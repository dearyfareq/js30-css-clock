function updateTime() {
  // Array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Array of days of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const weekday = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  var data = [day, month, year, weekday, hour, minute, second];
  var elements = [
    "day",
    "month",
    "year",
    "weekday",
    "hour",
    "minute",
    "second",
    "AmPm"
  ];

  for (var i = 0; i < elements.length; i++) {
    var change = document.getElementById(elements[i]);
    if (elements[i] == "month") {
      change.innerText = months[data[1]] + ",";
    } else if (elements[i] == "weekday") {
      change.innerText = daysOfWeek[data[3]];
    } else if (elements[i] == "hour") {
      change.innerText = data[i] + ":";
    } else if (elements[i] == "minute") {
      change.innerText = data[i] + ":";
    }  else if (elements[i] == "AmPm") {
      if (hour < 13){
        change.innerText = "AM";
      }
      else {
        change.innerText = "PM";
      }
    } else {
      change.innerText = data[i];
    }
  }
}

setInterval(updateTime, 1000);
