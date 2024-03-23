function sum(array) {
    return array.reduce((total, num) => total + num, 0);
}

function max(array) {
    return Math.max(...array);
}

function average(array) {
    const total = sum(array);
    return total / array.length;
}

module.exports = { sum, max, average };
