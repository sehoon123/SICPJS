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
        console.log(guess)
        const next = f(guess);
        if (close(guess, next)) {
            return next;
        } else {
            return try_with(next);
        }
    }
    return try_with(initial)
}


console.log(fixed_point(x => Math.log(1000)/Math.log(x),3));

function average_dampening(f, initial) {
    function close(x, y) {
        return abs(x-y) < tolerance;
    }

    function try_with(guess) {
        console.log(guess)
        const next = (guess+f(guess))/2;
        if (close(guess, next)) {
            return next;
        } else {
            return try_with(next);
        }
    }
    return try_with(initial)

}
console.log(average_dampening(x => Math.log(1000)/Math.log(x),3));
