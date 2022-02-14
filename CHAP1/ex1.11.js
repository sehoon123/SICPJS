// recursive
function f(n) {
    return n < 3 
        ? n
        : f(n-1) + 2*f(n-2) + 3*f(n-3)
}


// iterative
// f(n+3) = 3*f(n) + 2*f(n+1) + f(n+2)
function f(n) {
    return n < 3
    ? n
    : fi(2,1,0, n-2);
}

function fi(a, b, c, cnt) {
    return cnt === 0
    ? a
    : fi(a + 2*b + 3*c, a, b, cnt - 1);
}

// console.log(f(5))
