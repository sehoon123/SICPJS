function product(term, a, next, b) {
    return a > b
        ? 1
        : term(a) * product(term, next(a), next, b);
}

// function product(term, a, next, b) {
//     function iter(a, result) {
//         return a > b
//             ? 1
//             : iter(next(a), result * term(a))
//     }
//     return iter(a,1)
// }

// pi/4 = (1 - 1/3 + 1/5 - 1/7 + ...)

function f(a,b,c) {
    return b === 0
        ? c
        : a % 2 === 1
        ? f(a+1, b-1, c - 1/((2*a)+1))
        : f(a+1, b-1, c + 1/((2*a)+1))
}

console.log(4*f(1,1000,1))


