function abs(x) {
    if (x > 0) {
        return x;
    }
    return -x;
}

const tolerance = 0.000001;


function fixed_point(f, initial) {
    function close(x, y) {
        return abs(x-y) < tolerance;
    }


    function try_with(guess) {
        const next = f(guess);
        if (close(guess, next)) {
            return next;
        } else {
            return try_with(next);
        }
    }
    return try_with(initial)
}


console.log(fixed_point(x => 1 + (1/x), 0));
