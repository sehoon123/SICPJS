// a^(n-1) ≡ 1 mod(n)
// a^(n-1) -1 ≡ 0 mod(n)
//
// if n is prime than (n+1) is even
// (a^((n-1)/2) - 1) * (a^((n-1)/2) + 1) = a^(n-1) -1
// (a^((n-1)/4) - 1) *a^((n-1)/4) + 1) * (a^((n-1)/2) + 1) = a^(n-1) -1
// (a^((n-1)/4) - 1) *a^((n-1)/4) + 1) * (a^((n-1)/2) + 1) ≡ 0 mod(n)
//
//
// if n is prime than n should devide at least one of the left side

function expmod(a, x, mod) {
    return x === 0
        ? 1
        : x % 2 === 0
        ? expmod(a, x/2, mod)**2 % mod
        : (a * expmod(a, x-1, mod)) % mod
}

function miller_rabin_test(n) {
    if (n === 2) {
        return true;
    }
    var k = n-1;
    a = (1 + Math.floor(Math.random() * (n-1)));
    // a = 13
    // console.log(a)
    while (k% 2 === 0) {
        k = k / 2;
        // console.log(k)
        if ((expmod(a, k, n) + 1) % n === 0) {
            return true;
        }
        if (k%2 === 1) {
            if ((expmod(a,k,n) - 1) % n === 0) {
                return true;
            }
        }
    }
    return false;
}

function test(n, times) {
    return times === 0
        ? true
        : miller_rabin_test(n)
        ? test(n, times-1)
        : false;
}

console.log(test(13,3))

