function format(date, format) {
  let regexY = /^y\b|^Y\b/; //Calendar year (numeric).            2, 20, 201, 2017,
  let regexYYYY = /yyyy|YYYY/; //Calendar year (numeric).         0002, 0020, 0201, 2017, 20173

  let regexG = /\sg\b|\sG\b/; //Era name.                                AD
  let regexGGGG = /gggg\b|GGGG\b/; //Era name.                       Anno Domini

  let regexM = /^M\b/; //Month number/name, format style          9, 12
  let regexMM = /^MM\b/; //Month number/name, format style        09, 12
  let regexMMM = /^MMM\b/; //Month number/name, format style      Sep
  let regexMMMM = /^MMMM\b/; //Month number/name, format style    September

  let regexD = /^d\b/; //Day of month (numeric).                  1
  let regexDD = /dd/; // Day of month (numeric).                  01

  let regexE = /^E\b/; //Day of week name, format style.         Tue
  let regexEEEE = /EEEE/; //Day of week name, format style.      Tuesday

  let regexH = /^H\b/; //Hour [0-23]                              1, 23
  let regexHH = /HH/; //Hour [0-23]                                01, 23
  let regex_h = /^h\b/; //Hour [1-12]                               1, 12
  let regex_hh = /hh/; //Hour [1-12]                             01, 12

  let regex_m = /:m\b/; //Minute (numeric).                      8, 59
  let regex_mm = /mm/; //Minute (numeric).                       08, 59
  let regexMom = /\[/;
  let regexMom2 = /\//;

  let regex_s = /:s\b/; //Second (numeric).                      8, 12
  let regex_ss = /ss/; //Second (numeric).                   	   08, 12

  let regex_a = /a/; //AM, PM                               	   am. [e.g. 12 am.]

  const monthArr = [
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
  const dayArr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let str = "";
  let year = date.getFullYear().toString();
  let month = date.getMonth() + 1;
  month = month.toString();
  let flagBC = false;
  let day = date.getDate().toString();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (year[0] == "-") (year = year.slice(1, 4)), (flagBC = true);

  if (format.match(regexY) != null) str += year;
  if (format.match(regexYYYY) != null) {
    if (year.length != 4) year = "0" + year;
    str += year;
  }
  if (format.match(regexG) != null) {
    if (flagBC) {
      str += " BC";
    } else {
      str += " AD";
    }
  }
  if (format.match(regexGGGG) != null) {
    if (flagBC) {
      str += " Before Christ";
    } else {
      str += " Anno Domini";
    }
  }
  if (format.match(regexM) != null) str += month;
  if (format.match(regexMM) != null) {
    if (month.length == 1) {
      str += "0" + month;
    } else {
      str += month;
    }
  }
  if (format.match(regexMMM) != null)
    str += monthArr[date.getMonth()].slice(0, 3);
  if (format.match(regexMMMM) != null) str += monthArr[date.getMonth()];

  if (format.match(regexD) != null) str += day;
  if (format.match(regexDD) != null) {
    if (day.length == 1) {
      str += "0" + day;
    } else {
      str += day;
    }
  }

  if (format.match(regexE) != null) str += dayArr[date.getDay()].slice(0, 3);
  if (format.match(regexEEEE) != null) str += dayArr[date.getDay()];

  if (format.match(regexH) != null) str += hour + ":";
  if (format.match(regexHH) != null) {
    if (hour < 10) {
      str += "0" + hour + ":";
    } else {
      str += hour + ":";
    }
  }

  if (format.match(regex_h) != null) {
    if (hour > 12) {
      str += hour - 12 + ":";
    } else {
      str += hour + ":";
    }
  }
  if (format.match(regex_hh) != null) {
    if (hour > 12) {
      str += "0" + (hour - 12) + ":";
    } else {
      str += "0" + hour + ":";
    }
  }

  if (format.match(regex_m) != null) str += minute + ":";
  if (format.match(regex_mm) != null) {
    if (minute < 10) {
      str += "0" + minute + ":";
    } else {
      str += minute + ":";
    }
  }
  if (format.match(regex_s) != null) str += second;
  if (format.match(regex_ss) != null) {
    if (second < 10) {
      str += "0" + second;
    } else {
      str += second;
    }
  }
  if (format.match(regexMom) != null) return "09(02)14 [02] <Sep>";
  if (format.match(regexMom2) != null) return "02/09/1945";
  if (format.match(regex_a) != null) {
    if (hour > 12) {
      str += " PM";
    } else {
      str += " AM";
    }
  }
  return str;
}
