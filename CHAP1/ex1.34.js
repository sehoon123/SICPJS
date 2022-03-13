function f(g) {
    return g(2);
}

// console.log(f(z=> z * (z + 1)))
f(f)
// f(f) -> f(2) -> 2(2) -> TypeError
