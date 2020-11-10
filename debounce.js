const debounce = (fn, time) => {
  let timeOut;
  return function () {
    const func = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeOut);
    timeOut = setTimeout(func, time);
  };
};

const opDebounce = (func, delay, options) => {
  if (options == undefined) return debounce(func, delay);
  const leading = options.leading ? true : false;
  let timeout = null;
  let cooldown = false;
  return (...args) => {
    if (leading) {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
        return;
      }
      timeout = setTimeout(() => {
        cooldown = false;
      }, delay);
      if (cooldown) return;
      func(...args);
      cooldown = true;
    } else {
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    }
  };
};
