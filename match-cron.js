function matchCron(cron, date) {
    let arr = cron.split(' ')
    let minute = arr[0]
    let hour = arr[1]
    let dayOfMonth = arr[2]
    let month = arr[3]
    let dayWeek = arr[4]
    let flag = false
    if (minute === '*' || minute == date.getMinutes()) {
        flag = true
    } else {
        return false
    }
    if (hour === '*' || hour == date.getHours()) {
        flag = true
    } else {
        return false
    }
    if (dayOfMonth === '*' || dayOfMonth == date.getDate()) {
        flag = true
    } else {
        return false
    }
    if (month === '*' || month == date.getMonth() + 1) {
        flag = true
    } else {
        return false
    }
    if (dayWeek === '*') {
        flag = true
    } else if (dayWeek === 7 && date.getDay === 0) {
        flag = true
    } else if (date.getDay !== 0 && Number(dayWeek) === date.getDay()) {
        flag = true
    } else {
        return false
    }
    return flag
}