import { styles } from "./data.js";

export function pimp() {
  var btn = document.querySelector(".button");

  if (
    btn.classList.length <= styles.length - 1 &&
    document.querySelector(".unpimp") === null
  ) {
    btn.classList.add(styles[btn.classList.length - 1]);
  } else if (document.querySelector(".unpimp") === null) {
    btn.classList.add(styles[btn.classList.length - 1]);
    btn.classList.toggle("unpimp");
  } else if (
    btn.classList.length > 3 &&
    document.querySelector(".unpimp") !== null
  ) {
    btn.classList.remove(styles[btn.classList.length - 3]);
  } else if (
    btn.classList.length === 3 &&
    document.querySelector(".unpimp") !== null
  ) {
    btn.classList.remove(styles[btn.classList.length - 3]);
    btn.classList.toggle("unpimp");
  }
}
