function cube(x) {
    return x * x * x;
}

function p(x) {
    return 3 * x - 4 * cube(x);
}

function sine(angle) {
    return ! (abs(angle) > 0.1)
    ? angle
    : p(sine(angle / 3));
}

function abs(x) {
    return x >= 0
    ? x
    : -x;
}

console.log(sine(12.15))

//12.15
//P called
//4.05
//1.35
//0.45
//0.15
//0.05
//
//Q2
//O(log a)
