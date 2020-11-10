function pronoun(text) {
  var searchWords = ["i", "you", "he", "she", "it", "they", "we"];
  text = text.replace(/[.|,|\n]/g, " ");
  var arr = text.split(" ");
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    var name = arr[i].toLowerCase();
    if (searchWords.includes(name)) {
      if (res[name] == undefined) {
        var curr = {};
        if (
          i == arr.length - 1 ||
          searchWords.includes(arr[i + 1].toLowerCase())
        ) {
          curr["word"] = [];
        } else {
          curr["word"] = [arr[i + 1]];
        }
        curr["count"] = 1;
        res[name] = curr;
      } else {
        if (
          i == arr.length - 1 ||
          searchWords.includes(arr[i + 1].toLowerCase())
        ) {
        } else {
          res[name]["word"].push(arr[i + 1]);
        }
        res[name]["count"]++;
      }
    }
  }
  return res;
}
