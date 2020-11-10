let lum = document.createElement("div");
let hue = document.createElement("div");
let hsl = document.createElement("div");
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
let axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
let axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
let copyInput = document.createElement("input");

export const pick = () => {
  document.addEventListener("mousemove", mouseHandler);

  lum.classList.add("luminosity", "text");
  hue.classList.add("hue", "text");
  hsl.classList.add("hsl", "text");

  lum.style.position = "absolute";
  hue.style.position = "absolute";

  lum.textContent = "luminosity";
  hue.textContent = "hue";

  axisX.id = "axisX";
  axisY.id = "axisY";

  axisX.setAttribute("y1", 0);
  axisX.setAttribute("y2", document.body.clientHeight);
  axisX.setAttribute("x1", 0);
  axisX.setAttribute("x2", 0);

  axisY.setAttribute("y1", 0);
  axisY.setAttribute("y2", 0);
  axisY.setAttribute("x1", 0);
  axisY.setAttribute("x2", document.body.clientWidth);

  svg.append(axisX, axisY);

  copyInput.setAttribute("type", "text");
  copyInput.setAttribute("hidden", true);
  //   copyInput.style.display = 'none'

  copyInput.id = "copy-input";

  document.addEventListener("click", copy);

  document.body.append(lum, hue, hsl, svg, copyInput);
};

const mouseHandler = (e) => {
  let x = e.clientX;
  let y = e.clientY;

  let h = Math.round((x / document.body.clientWidth) * 360);
  let s = 50;
  let l = Math.round((y / document.body.clientHeight) * 100);

  lum.textContent = `${l}\nluminosity`;
  hue.textContent = `hue\n${h}`;

  axisX.setAttribute("x1", x);
  axisX.setAttribute("x2", x);
  axisY.setAttribute("y1", y);
  axisY.setAttribute("y2", y);

  document.body.style.background = hslString({ h, s, l });
  copyInput.value = hslString({ h, s, l });
  hsl.textContent = hslString({ h, s, l });
};

const hslString = ({ h, s, l }) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
};

function copy(e) {
  let copyText = document.getElementById("copy-input");
  copyInput.removeAttribute("hidden");
  copyText.select();
  document.execCommand("copy");
  copyInput.setAttribute("hidden", true);
}
