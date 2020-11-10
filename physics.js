function getAcceleration(obj) {
  const typ = (x, y) => typeof x == "number" && typeof y == "number";
  if (typ(obj.f, obj.m)) {
    return obj.f / obj.m;
  } else if (typ(obj.Δv, obj.Δt)) {
    return obj.Δv / obj.Δt;
  } else if (typ(obj.d, obj.t)) {
    return (2 * obj.d) / (obj.t * obj.t);
  } else {
    return "impossible";
  }
}
