function cbrt_iter(guess, x) {
    return is_good_enough(guess, x)
    ? guess
    : cbrt_iter(improve(guess, x) , x);
}

function is_good_enough(guess, x) {
    return (guess - improve(guess, x))/ guess > -0.01 && (guess - improve(guess,x))/guess < 0.01
}

function square(x) {
    return x * x
}

function improve(guess, x) {
    return (x/square(guess) + 2 * x) / 3
}

function average(x, y) {
    return (x + y) / 2;
}

function cbrt(x) {
    return cbrt_iter(1, x);
}

console.log(cbrt(27))
