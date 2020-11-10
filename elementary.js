const multiply = (a, b) => {
    let flag = true;
    if (b < 0) {
        flag = false;
        b = -b;
    }

    let res = 0;
    for (let i = 0; i < b; i++) {
        res += a;
    }
    return flag ? res : -res;
};

const divide = (a, b) => {
    if (a < 0 && b < 0) {
        a = -a;
        b = -b;
    }

    let flag = true;
    if (a < 0) {
        flag = false;
        a = -a;
    }
    if (b < 0) {
        flag = false;
        b = -b;
    }

    let res = 0;
    for (let c = a; c >= b; c -= b) {
        res++;
    }
    return flag ? res : -res;
};

const modulo = (a, b) => {
    let res = a - multiply(b, divide(a, b));

    if (a > 0 && b > 0) {
        return res;
    }
    if (a < 0) {
        return res;
    }
    if (b < 0) {
        return res;
    }
    return res;
};