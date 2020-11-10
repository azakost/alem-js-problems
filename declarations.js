const escapeStr = '`\\/"\'';
const arr = [4, '2'];
const obj = {
    str: 'string',
    num: 1,
    bool: true,
    undef: undefined,
};
const nested = {
    arr: [4, undefined, '2'],
    obj: {
        str: 'string',
        num: 1,
        bool: true,
    }
};

deepFreeze(obj);
deepFreeze(nested);

function deepFreeze(object) {
    var propNames = Object.getOwnPropertyNames(object);
    for (let name of propNames) {
        let value = object[name];
        object[name] = value && typeof value === "object" ?
            deepFreeze(value) : value;
    }
    return Object.freeze(object);
};

