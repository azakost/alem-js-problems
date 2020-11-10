const throttle = (func, delay) => {
  let timeout = null;
  let cooldown = true;
  return (...args) => {
    if (cooldown) {
      cooldown = false;
      timeout = setTimeout(() => {
        cooldown = true;
      }, delay);
      func(...args);
    }
  };
};

const opThrottle = (func, delay, options) => {
  let leading = false,
    trailing = false;
  if (typeof options !== "undefined") {
    leading = options.leading ? true : false;
    if (!leading) trailing = options.trailing ? true : false;
  }
  let timeout = null;
  let cooldown = true;
  return (...args) => {
    if (cooldown) {
      cooldown = false;
      timeout = setTimeout(() => {
        cooldown = true;
        if (trailing) {
          func(...args);
        }
      }, delay);
      if (leading) {
        func(...args);
      }
    }
  };
};
