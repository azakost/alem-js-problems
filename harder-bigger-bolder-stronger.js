export function generateLetters() {
  const body = document.querySelector("body");
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var fontS = 10;
  var fontWeight = 300;
  for (var i = 1; i < 121; i++) {
    if (i > 40 && i < 81) {
      fontWeight = 400;
    } else if (i > 80) {
      fontWeight = 600;
    }
    var div = document.createElement("div");
    div.textContent = upperCaseAlphabet.slice()[
      Math.floor(Math.random() * upperCaseAlphabet.length)
    ];
    div.style.fontSize = fontS + i + "px";
    div.style.fontWeight = fontWeight;
    body.append(div);
  }
}
