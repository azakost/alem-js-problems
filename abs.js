const isPositive = (n) => (!isNaN(n) && n > 0);
const abs = (n) => (isPositive(n) || n === 0) ? n : -n;
