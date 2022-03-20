function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return test_divisor * test_divisor > n
        ? n
        : n % test_divisor === 0
        ? test_divisor
        : find_divisor(n, test_divisor+1);
}

function is_prime(n) {
    return n == smallest_divisor(n);
}

console.log(smallest_divisor(19999))
console.log(smallest_divisor(1999))
console.log(smallest_divisor(199))
console.log(is_prime(199))
