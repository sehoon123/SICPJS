// indicates application order
let count = 0;

function gcd(a, b) {
    count++
    return b === 0
           ? a
           : gcd(b, a%b)
}

console.log(gcd(206, 40))
console.log(count)

// Try normal order yourself :D
