function filterEntries(obj, foo) {
  var arr = Object.entries(obj);
  var res = arr.filter(foo);
  return Object.fromEntries(res);
}

function mapEntries(obj, foo) {
  var arr = Object.entries(obj);
  var res = arr.map(foo);
  return Object.fromEntries(res);
}

function reduceEntries(obj, foo, acc) {
  var arr = Object.entries(obj);

  if (acc == undefined) {
    return arr.reduce(foo);
  }
  return arr.reduce(foo, acc);
}

function totalCalories(obj) {
  var result = 0;
  var arr = Object.entries(obj).forEach(([key, value]) => {
    var k = nutritionDB[key];
    result = result + (k.calories * value) / 100;
  });

  return Math.round(result * 10) / 10;
}

function lowCarbs(obj) {
  var result = {};
  var arr = Object.entries(obj).forEach(([key, value]) => {
    var k = nutritionDB[key];
    console.log((k.carbs * value) / 100);
    if ((k.carbs * value) / 100 < 50) {
      result[key] = obj[key];
    }
  });
  return result;
}

function cartTotal(obj) {
  var result = {};
  var nuts = {};
  var arr = Object.entries(obj).forEach(([key, value]) => {
    var m = value / 100;
    nuts = Object.fromEntries(
      Object.entries(nutritionDB[key]).map(([key, val]) => [
        key,
        Math.round(val * m * 1000) / 1000,
      ])
    );
    result[key] = nuts;
  });
  return result;
}
