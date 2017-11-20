let countDownDate = new Date("2018-01-01T00:00:00Z");

export function getDistance() {
    return countDownDate - new Date();
}

export function isExpired() {
    return getDistance() < 0;
}
