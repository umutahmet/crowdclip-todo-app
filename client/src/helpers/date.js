const checkZero = (data) => {
    if (data.length === 1) {
        data = '0' + data
    }
    return data
}

export const formatDate = (date, excludeTime) => {
    if (!date) return

    let day = date.getDate() + ''
    let month = date.getMonth() + 1 + ''
    let year = date.getFullYear() + ''
    let hour = date.getHours() + ''
    let minutes = date.getMinutes() + ''

    day = checkZero(day)
    month = checkZero(month)
    year = checkZero(year)
    hour = checkZero(hour)
    minutes = checkZero(minutes)

    if (excludeTime) {
        return day + '/' + month + '/' + year
    }

    return day + '/' + month + '/' + year + ' ' + hour + ':' + minutes
}
