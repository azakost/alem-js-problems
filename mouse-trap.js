let circle;
let box;
let insideX;
let insideY;
let isInside;
let hasEntered = false;
export const createCircle = () => {
  document.addEventListener("click", (e) => {
    circle = document.createElement("div");
    circle.style.background = "white";
    circle.className = "circle";
    circle.style.left = e.clientX - 25 + "px";
    circle.style.top = e.clientY - 25 + "px";
    document.body.appendChild(circle);
    hasEntered = false;
    // console.log(circle.getBoundingClientRect())
  });
};

export const moveCircle = () => {
  document.addEventListener("mousemove", (e) => {
    circle.style.left = e.clientX - 25 + "px";
    circle.style.top = e.clientY - 25 + "px";
    insideX =
      e.clientX > box.getBoundingClientRect().left + 25 &&
      e.clientX < box.getBoundingClientRect().right - 25;
    insideY =
      e.clientY > box.getBoundingClientRect().top + 25 &&
      e.clientY < box.getBoundingClientRect().bottom - 25;
    isInside = insideX && insideY;
    if (isInside) {
      hasEntered = true;
      circle.style.background = "var(--purple)";
    } else {
      circle.style.background = hasEntered ? "var(--purple)" : "white";
    }
    if (hasEntered) {
      if (isInside) {
        circle.style.left = e.clientX - 25 + "px";
        circle.style.top = e.clientY - 25 + "px";
      } else {
        if (e.clientX < box.getBoundingClientRect().left + 25) {
          circle.style.left = box.getBoundingClientRect().left + "px";
        }
        if (e.clientX > box.getBoundingClientRect().right - 25) {
          circle.style.left = box.getBoundingClientRect().right - 50 + "px";
        }
        if (e.clientY < box.getBoundingClientRect().top + 25) {
          circle.style.top = box.getBoundingClientRect().top + "px";
        }
        if (e.clientY > box.getBoundingClientRect().bottom - 25) {
          circle.style.top = box.getBoundingClientRect().bottom - 50 + "px";
        }

        // circle.style.top =
      }
    }
    console.log(e.clientX);
  });
};

export const setBox = () => {
  box = document.createElement("div");
  box.className = "box";
  document.body.appendChild(box);
  console.log(isInside);
};
