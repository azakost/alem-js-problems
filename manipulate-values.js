function filterValues(obj, callback) {
  let res = {};
  for (const [k, v] of Object.entries(obj)) {
    if (callback(v)) {
      res[k] = v;
    }
  }
  return res;
}

function mapValues(obj, callback) {
  let res = {};
  for (const [k, v] of Object.entries(obj)) {
    res[k] = callback(v);
  }
  return res;
}
function reduceValues(obj, callback, acc = 0) {
  for (const [k, v] of Object.entries(obj)) {
    acc = callback(acc, v);
  }
  return acc;
}
