function fusion(a, b) {
  let tip = typeof a == typeof b ? typeof a : "mismatch";
  switch (tip) {
    case "number":
      return a + b;
    case "string":
      return a + " " + b;
    case "object":
      if (Array.isArray(a)) {
        return a.concat(b);
      } else {
        let res = {};
        let keys;
        let ak = Object.keys(a);
        let bk = Object.keys(b);
        if (ak.length == 0) {
          return b;
        }
        ak.length > bk.length ? (keys = ak) : (keys = bk);
        for (let k of keys) {
          if (a[k] == undefined) {
            res[k] = b[k];
            continue;
          }
          if (b[k] == undefined) {
            res[k] = a[k];
            continue;
          }
          res[k] = fusion(a[k], b[k]);
        }
        return res;
      }
    case "mismatch":
      return b;
  }
}
