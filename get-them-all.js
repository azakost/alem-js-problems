export function getArchitects() {
  var res = [];
  var sub = Array.from(document.getElementsByTagName("a"));
  var del = Array.from(document.getElementsByTagName("span"));
  res.push(sub);
  res.push(del);
  return res;
}

export function getClassical() {
  var res = [];
  var sub = Array.from(document.getElementsByClassName("classical"));
  var del = Array.from(document.querySelectorAll("a:not(.classical)"));
  res.push(sub);
  res.push(del);
  return res;
}

export function getActive() {
  var res = [];
  var sub = Array.from(document.getElementsByClassName("classical active"));
  var del = Array.from(document.querySelectorAll("a.classical:not(.active)"));
  res.push(sub);
  res.push(del);
  return res;
}

export function getBonannoPisano() {
  let arr = [];
  let res = document.getElementById("BonannoPisano");
  let res1 = Array.from(document.querySelectorAll("a:not(#BonannoPisano)"));
  arr.push(res);
  arr.push(res1);
  console.log(res);
  return arr;
}
