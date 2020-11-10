import { colors } from "./data.js";

export { generateClasses, generateColdShades, choseShade };

function generateColdShades() {
  var coldShades = [
    "aqua",
    "blue",
    "turquoise",
    "green",
    "cyan",
    "navy",
    "purple",
  ];
  var body = document.querySelector("body");
  for (var i = 0; i < colors.length; i++) {
    var contain = false;
    for (var j = 0; j < coldShades.length; j++) {
      var regexp = new RegExp(coldShades[j]);
      if (regexp.test(colors[i])) {
        contain = true;
        break;
      }
    }
    if (contain) {
      var div = document.createElement("div");
      div.className = colors[i];
      div.textContent = colors[i];
      body.append(div);
    }
  }
}

function generateClasses() {
  var style = document.createElement("style");
  style.innerHTML = "";
  for (var i = 0; i < colors.length; i++) {
    style.innerHTML += "." + colors[i] + "{background:" + colors[i] + ";}";
  }
  document.getElementsByTagName("head")[0].appendChild(style);
}

function choseShade(shade) {
  var div = document.getElementsByTagName("div");
  for (var i = 0; i < div.length; i++) {
    if (!div[i].classList.contains(shade)) {
      div[i].classList.replace(div[i].classList[0], shade);
    }
  }
}
