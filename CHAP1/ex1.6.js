function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
}
conditional(2 === 3, 0, 5);

// 2 === 3 : False
// so the function returns else_clause which is 5

conditional(1 === 1, 0, 5);
// 1 === 1 : True
// so the function returns then_clause which is 0

function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x), guess, sqrt_iter(imporve(guess, x), x));
}

// this function is designed to return sqrt value
// but in conditional function arguments includes function "is_good_enough",// function "sqrt_iter", and two integer guess, x
//
// accoding to this book JS adopt applicative-order evaluation so
// sqrt_iter calls sqrt_iter and it never ends
