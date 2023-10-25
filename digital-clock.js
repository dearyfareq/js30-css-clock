function updateTime() {
  // Array of months to convert the 0 - 11 data into names, easier than to manually change each one
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

  // Array of days of the week, same concept with the months
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  //getting the data and separating each value into a constant
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const weekday = time.getDay();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  //putting time data into an array to loop over, better than an if else statment for each one XP
  var data = [day, month, year, weekday, hour, minute, second];

  //IDs of the elements to be changed, used to loop over the elements
  var elements = [
    "day",
    "month",
    "year",
    "weekday",
    "hour",
    "minute",
    "second",
    "AmPm",
  ];

  //for loop with the elements's length, added if else to convert the month/weekday into names using the initial two top arrays
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
    } else if (elements[i] == "AmPm") {
      if (hour < 13) {
        change.innerText = "AM";
      } else {
        change.innerText = "PM";
      }
    } else {
      change.innerText = data[i];
    }
  }
}

//function to run every 1000ms or 1s
setInterval(updateTime, 1000);

/*
PS:
the hour and minute elements have ":" added to them when the innerText is changed.
time format is in 24, so lower than 13 means its AM, higher is PM.
the rest or numbers only data are changed without any problems.
*/
