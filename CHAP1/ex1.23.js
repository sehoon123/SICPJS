function get_time() {
    return new Date().getTime();
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}

function find_divisor(n, test_divisor) {
    return test_divisor * test_divisor > n
        ? n
        : n % test_divisor === 0
        ? test_divisor
        : find_divisor(n, next(test_divisor));
}

function next(test_divisor) {
    return test_divisor === 2
        ? test_divisor + 1
        : test_divisor + 2
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function expmod(a, x, mod) {
    return x === 0
        ? 1
        : x % 2 === 0
        ? expmod(a, x/2, mod)**2 % mod
        : (a * expmod(a, x-1, mod)) % mod
}

function fermat_test(n) {
    function try_it(a) {
        // a^n (mod n) = a
        // if n is prime number it always satisfy
        return expmod(a, n, n) === a;
    }
    return try_it(1 + Math.floor(Math.random() * (n-1)));
}

function fast_is_prime(n, times) {
    return times === 0
        ? true
        : fermat_test(n)
        ? fast_is_prime(n, times-1)
        : false;
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}

// function start_prime_test(n, start_time) {
//     return is_prime(n)
//     ? report_prime(get_time() - start_time)
//     : true;
// }
//

function start_prime_test(n, start_time) {
    return fast_is_prime(n, Math.floor(Math.log(n)))
        ? report_prime(get_time() - start_time)
        : true;
}


function report_prime(elapsed_time) {
    display(" *** ");
    display(elapsed_time);
}

function display(string) {
    console.log(string);
}

function search_for_primes(n, k) {
    return k === 0
        ? true
        : n % 2 === 0
        ? search_for_primes(n+1, k)
        : timed_prime_test(n)
        ? search_for_primes(n+2, k)
        : search_for_primes(n+2, k-1)
}

// search_for_primes(100000,3)

timed_prime_test(10007)

