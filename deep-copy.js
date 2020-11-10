function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  } else if (typeof obj === "object") {
    if (Object.keys(obj).length == 0) {
      return obj;
    }
    return Object.keys(obj)
      .map((k) => ({ [k]: deepCopy(obj[k]) }))
      .reduce((a, c) => Object.assign(a, c), {});
  }
  return obj;
}
