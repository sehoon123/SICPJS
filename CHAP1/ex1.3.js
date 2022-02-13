function sum(a, b, c) {
    return (a + b >= b + c && a + b >= a + c
        ? a + b
        : b + c >= a + b && b + c >= a + c
        ? b + c
        : a + c
    )
}

console.log(sum(1,6,1))
