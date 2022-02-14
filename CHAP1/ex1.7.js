function sqrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : sqrt_iter(improve(guess, x) , x);
}

function abs(x) {
    return x >= 0 ? x : -x
}

function is_good_enough(guess, x) {
    return (guess - improve(guess, x))/ guess > -0.01 && (guess - improve(guess,x))/guess < 0.01
}

function square(x) {
    return x * x
}

function improve(guess, x) {
    return average(guess, x / guess)
}

function average(x, y) {
    return (x + y) / 2
}

console.log(sqrt_iter(1000000000000000, 0.00000001))
console.log(sqrt_iter(1, 10000000))
