function double(x) {
    return 2 * x
}
 function half(x) {
     return x / 2
 }

function times(a, b) {
    return a === 1
        ? b
        : b === 1
        ? a
        : a === 0 || b === 0 
        ? 0
        : b % 2 === 0
        ? double(times(a, half(b)))
        : a + times(a, b-1)
}

// 2 * 10
// 2 * (2 * 5)
// 2 * (2 * (4 + 1))
// 2 * (2 * 4 + 2)
// 2 * (2 * (2 * 2) + 2)
//

console.log(times(7, 8))
