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
        : find_divisor(n, test_divisor+1);
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function timed_prime_test(n) {
    display(n);
    return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
    return is_prime(n)
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

// timed_prime_test(44);

function search_for_primes(n, k) {
    return k === 0
        ? true
        : n % 2 === 0
        ? search_for_primes(n+1, k)
        : timed_prime_test(n)
        ? search_for_primes(n+2, k)
        : search_for_primes(n+2, k-1)
}

// console.log(search_for_primes(10000,3));
search_for_primes(10000,3)

// var sum = 0;
// var start = new Date().getTime();
// console.time('calculation')
// for (var i = 1; i <= 100000000; i++) {
//     sum += i;
// }
// console.timeEnd('calculation')
// var end = new Date().getTime();
// console.log(end - start)
