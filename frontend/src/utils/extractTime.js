export const extractTime = (dateString) => {
    const date = new Date(dateString)
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

// hepler function to pad single digit with a leading zero
const padZero = (number) => {
    return number.toString().padStart(2, "0")
}