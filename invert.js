function invert(obj) {
  let res = {};
  for (let o of Object.keys(obj)) {
    let v = obj[o];
    res[v] = o;
  }
  return res;
}
