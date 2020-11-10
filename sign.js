const sign = (n) => {
    if (n > 0) {
        return 1
    } else if (n === 0) {
        return 0
    } else {
        return -1
    }
}
const sameSign = (x, y) => (sign(x) == sign(y))