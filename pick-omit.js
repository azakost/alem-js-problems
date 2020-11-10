function pick(obj, keys) {
  let res = {};
  if (Array.isArray(keys)) {
    for (let k of keys) {
      if (obj[k] != undefined) {
        res[k] = obj[k];
      }
    }
  } else {
    if (obj[keys] != undefined) {
      res[keys] = obj[keys];
    }
  }

  return res;
}

function omit(obj, keys) {
  let res = {};

  for (let o of Object.keys(obj)) {
    if (Array.isArray(keys)) {
      if (!keys.includes(o)) {
        res[o] = obj[o];
      }
    } else {
      if (keys != o) {
        res[o] = obj[o];
      }
    }
  }

  return res;
}
