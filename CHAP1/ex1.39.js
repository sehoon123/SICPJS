function iter(n, d, k) {
    function frac(i, ans) {
        console.log(ans)
        if (i === 0) {
            return ans;
        }
        return frac(i-1, n(i)/(d(i) + ans));
    }
    return frac(k, 0)
}

function tan(x, k) {
    return iter(i => i === 1 ? x : -1*x**2, i => 2*i - 1, k);
}

console.log(tan(Math.PI, 14))
