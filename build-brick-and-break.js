export { build, repair, destroy };

function build(numOfBricks) {
  if (numOfBricks === 0) {
    return;
  }
  var body = document.querySelector("body");

  function adder() {
    var num = document.getElementsByTagName("div").length + 1;

    const brick = document.createElement("div");
    brick.id = "brick-" + num;
    brick.textContent = num;
    if ((num + 1) % 3 === 0) {
      brick.dataset.foundation = true;
    }
    body.append(brick);
  }

  var interval = setInterval(adder, 100, body);
  setTimeout(() => clearInterval(interval), numOfBricks * 100);
}

function repair(...arr) {
  for (var i = 0; i < arguments.length; i++) {
    var div = document.getElementById(arguments[i]);
    if (div.hasAttribute("data-foundation")) {
      div.dataset.repaired = "in progress";
    } else {
      div.dataset.repaired = true;
    }
  }
}

function destroy() {
  var divs = document.getElementsByTagName("div");
  divs[divs.length - 1].remove();
}
