function replica(...ell) {
  var res = {};
  for (var i = 0; i < ell.length; i++) {
    Object.keys(ell[i]).forEach((key) => {
      if (res[key] != undefined) {
        if (
          typeof res[key] != "object" ||
          Array.isArray(res[key]) ||
          Array.isArray(ell[i][key])
        ) {
          res[key] = ell[i][key];
        } else {
          res[key] = replica(res[key], ell[i][key]);
        }
      } else {
        res[key] = ell[i][key];
      }
    });
  }
  return res;
}
