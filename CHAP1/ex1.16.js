function exp_iter(a, b, count) {
    return count === 0
        ? a
        :count % 2 == 0
        ? exp_iter(a, b*b, count/2)
        : b*exp_iter(a, b*b, (count-1)/2)
}

function exp(b, n) {
    return exp_iter(1, b, n)
}

// console.log(exp(10,4))
