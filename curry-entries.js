const defaultCurry = (obj1) => (obj2) => {
  var newObj = {};
  Object.keys(obj1).forEach((key) => {
    if (obj2[key] != undefined) {
      newObj[key] = obj2[key];
    } else {
      newObj[key] = obj1[key];
      console.log(newObj);
    }
  });
  Object.keys(obj2).forEach((key) => {
    if (newObj[key] == undefined) {
      newObj[key] = obj2[key];
    }
  });
  return newObj;
};

const mapCurry = (func) => (obj) => {
  var newObj = Object.entries(obj);
  var result = Object.fromEntries(newObj.map(func));
  return result;
};

const filterCurry = (func) => (obj) => {
  var newObj = Object.entries(obj);
  var result = Object.fromEntries(newObj.filter(func));
  return result;
};

const reduceCurry = (func) => (obj, acc) => {
  var newObj = Object.entries(obj);
  var result = newObj.reduce(func, acc);
  return result;
};

const reduceScore = (obj, acc) => {
  return reduceCurry((acc, el) => {
    if (el[1].isForceUser) {
      acc = acc + el[1].shootingScore + el[1].pilotingScore;
    }
    return acc;
  })(obj, acc);
};

const filterForce = (obj) => {
  return filterCurry((el) => {
    if (el[1].isForceUser && el[1].shootingScore >= 80) return true;
  })(obj);
};

const mapAverage = (obj) => {
  return mapCurry((el) => {
    el[1]["averageScore"] = (el[1].shootingScore + el[1].pilotingScore) / 2;
    return [el[0], el[1]];
  })(obj);
};
