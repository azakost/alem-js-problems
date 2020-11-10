function filterKeys(obj, callback) {
  let res = {};
  for (const [k, v] of Object.entries(obj)) {
    if (callback(k)) {
      res[k] = v;
    }
  }
  return res;
}

function mapKeys(obj, callback) {
  let res = {};
  for (const [k, v] of Object.entries(obj)) {
    res[callback(k)] = v;
  }
  return res;
}

function reduceKeys(obj, callback, acc) {
  let res = "";
  Object.keys(obj).forEach((k) => {
    if (acc != undefined || acc != null) {
      res = callback(acc, k);
    } else {
      res = k;
    }
    acc = res;
  });
  return res;
}

console.log("hello");
