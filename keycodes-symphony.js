export function compose() {
  document.addEventListener("keydown", (value) => {
    if (value.key === "Backspace") {
      var div = document.getElementsByTagName("div");
      div[div.length - 1].remove();
      return;
    }

    if (value.key === "Escape") {
      var body = document.querySelector("body");
      var div = document.getElementsByTagName("div");
      var el = document.getElementsByClassName("note");
      Array.from(el).forEach((element) => element.remove());
      return;
    }
    if (value.key != value.key.toLocaleLowerCase()) {
      return;
    }

    var body = document.querySelector("body");
    var div = document.createElement("div");
    div.className = "note";
    div.textContent = value.key;
    div.style.background = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    body.append(div);
  });
}
