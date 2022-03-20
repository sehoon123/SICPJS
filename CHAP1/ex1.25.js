function expmod(base, exp, m) {
    return fast_expt(base, exp) % m
}

// 5^4 mod 19 = (5^2 * 5^2) mod 19 = (5^2 mod 19 * 5^2 mod 19) mod 19


// After we calculate exp it can possibly be a Big-integer which means
// we can't express this in the size of integer so the function is
// literally correct in mathmatics but it might blow up in CS
