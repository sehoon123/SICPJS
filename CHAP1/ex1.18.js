function double(x) {
    return 2 * x
}
 function half(x) {
     return x / 2
 }

function times_iter(ans, a, b) {
    return b === 1
    ? ans + a
    : a === 1
    ? b
    : b % 2 === 0 
    ? times_iter(ans, double(a), half(b))
    : times_iter(ans + a, a, b-1)
}

function times(a, b) {
    return times_iter(0, a, b)
}

// 2 * 10
// 2 * (2 * 5)
// 2 * (2 * (4 + 1))
// 2 * (2 * 4 + 2)
// 2 * (2 * (2 * 2) + 2)

// console.log(times_iter(0, 7, 8))

console.log(times(a, b))
