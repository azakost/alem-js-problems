import { gossips } from "./data.js";

export const grid = () => {
  initialRender();
  listeners();
  newGossip();
};

const newGossip = () => {
  document
    .querySelector("form.gossip")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let textarea = this.querySelector("textarea");
      let el = document.createElement("div");
      el.classList.add("gossip");
      el.textContent = textarea.value;
      el.style.width = `${document.getElementById("width").value}px`;
      el.style.fontSize = `${document.getElementById("fontSize").value}px`;
      el.style.background = `hsl(280, 50%, ${
        document.getElementById("background").value
      }%)`;
      document.body.insertBefore(el, document.querySelector("div.gossip"));
      textarea.value = "";
    });
};

const initialRender = () => {
  document.body.innerHTML += `<div class="ranges">
          <div class="range">
              <label for="width">width</label>
              <input type="range" id="width" min="200" max="800" value="250" />
              <span>250</span>
          </div>
          <div class="range">
              <label for="fontSize">fontSize</label>
              <input type="range" id="fontSize" min="20" max="40" value="25" />
              <span>25</span>
          </div>
          <div class="range">
              <label for="background">background</label>
              <input type="range" id="background" min="20" max="75" value="50" />
              <span>50</span>
          </div>
        </div>`;

  document.body.innerHTML += `<form class="gossip"><textarea placeholder="Got a gossip to share?"></textarea><button type="submit">Share gossip!</button></form>`;

  gossips.forEach((g) => {
    document.body.innerHTML += `<div class="gossip">${g}</div>`;
  });
};

const listeners = () => {
  listener("width", "width", (n) => `${n}px`);
  listener("fontSize", "fontSize", (n) => `${n}px`);
  listener("background", "background", (n) => `hsl(280, 50%, ${n}%)`);
};

const listener = (id, style, f) => {
  let el = document.getElementById(id);

  el.addEventListener("input", (e) => {
    let gossipsElements = document.querySelectorAll(".gossip");
    gossipsElements.forEach((g) => (g.style[style] = f(e.target.value)));
    el.closest(".range").querySelector("span").textContent = e.target.value;
  });

  let gossipsElements = document.querySelectorAll(".gossip");
  gossipsElements.forEach((g) => (g.style[style] = f(el.value)));
};
