const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const countDownDate = new Date("2018-01-01T00:00:00Z");

export function getDistance() {
    return countDownDate - new Date();
}

export function isSecondsCountdown() {
    return getDistance() < 10000;
}

export function isExpired() {
    return getDistance() < 0;
}

export function getText() {
    let distance = getDistance();

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    let secondsCountdown = (days === 0 && hours === 0 && minutes === 0);

    if (seconds < 10) seconds = "0" + seconds;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    if (secondsCountdown) {
        return seconds;
    } else {
        return "" + hours + " : " + minutes + " : " + seconds;
    }
}