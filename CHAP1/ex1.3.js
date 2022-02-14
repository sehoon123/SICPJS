function sum(a, b, c) {
    return (a + b >= b + c && a + b >= a + c
        ? a*a + b*b
        : b + c >= a + b && b + c >= a + c
        ? b*b + c*c
        : a*a + c*c
    )
}

// console.log(sum(1,6,1))
