function randomFraction() {
    return Math.random();
}
// a random decimal number between 0 (inclusive) and 1 (exclusive)

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}