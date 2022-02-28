function fib(n) {
    return fib_iter(1,0,0,1,n);
}

// LINEAR TRANSFORMATION
//
// typical fib
// |a b| |1 1|
//       |1 0|
// T2
//
// |a b| |2 1|
//       |1 1|
//

// this example
//
// |a b| |p+q q|
//       |q   p|
//
// T2
//
// |0 1| |p+q q||p+q q|
//       |q   p||q   p|
//
// |0 1| |(p+q)^2+q^2  pq+q^2+pq|
//       | pq+q^2+pq   q^2 + p^2|
//
// |2*(pq)+q^2  p^2+q^2|      
//
function fib_iter(a, b, p, q, count) {
    return count === 0
           ? b
           : count % 2 === 0
           ? fib_iter(a,
                      b,
                      p*p + q*q,
                      2*(p*q) + q*q,
                      count / 2)
           : fib_iter(b * q + a * q + q * p,
                      b * p + a * q,
                      p,
                      q,
                      count - 1);
}
