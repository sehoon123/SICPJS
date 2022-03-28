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

console.log( 2+ iter(i => 1, i => i % 3 === 2 ? 2 * (i+1)/3 : 1, 10));
