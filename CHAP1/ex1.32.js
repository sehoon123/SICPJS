//
// RECURSIVE
//

function accumulate(combiner, null_value, term, a, next, b) {
    return a > b 
        ? null_value
        : combiner(term(a), accumulate(combiner, null_value, term,
                    next(a), next, b));
}

function sum(term, a, next, b) {
    function plus(x,y) {
        return x + y;
    }
    return accumulate(plus, 0, term, a, next, b);
}

function product(term, a, next, b) {
    function mul(x, y) {
        return x * y;
    }
    return accumulate(mul, 1, term, a, next, b);
}


//
// ITER
//

function acc_iter(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), combiner(term(a), result));
    }
    return iter(a, null_value);
}

function sum_iter(term, a, next, b) {
    function plus(x, y) {
        return x + y;
    }
    return acc_iter(plus, 0, term, a, next, b);
}

function product_iter(term, a, next, b) {
    function mul(x, y) {
        return x * y;
    }
    return acc_iter(mul, 1, term, a, next, b);
}
