const get = (src, path) => {
    let pathArr = path.split('.')
    let tmp = src
    pathArr.forEach((element) => {
        if (tmp === undefined) return tmp
        tmp = tmp[element]
    })
    return tmp
}