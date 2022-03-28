function cont_frac(n, d, k) {
    function frac(i) {
        if (i > k) {
            return 0;
        }
        return n(i)/(d(i) + frac(i+1));
    }
    return frac(1)
}

function iter(n, d, k) {
    function frac(i, ans) {
        if (i > k) {
            return ans;
        }
        return frac(i+1, n(i)/(d(i) + ans));
    }
    return frac(1, 0)
}

console.log(iter(i => 1, i => 1, 20));
