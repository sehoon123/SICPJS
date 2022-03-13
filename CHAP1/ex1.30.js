//
// Original
//
// function sum(term, a, next, b) {
//     return a > b
//         ? 0
//         : term(a) + sum(term, next(a), next, b);
// }
//


function sum(term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), result + term(a));
    }
    return iter(a, 0);
}

