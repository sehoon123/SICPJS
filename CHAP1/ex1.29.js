// SIMPSON
// Ai = h/3(f(xi-1) + 4f(xi) + f(xi+1))
// A = h/3[f0 + 4(f1 + f3 + ...) + 2(f2 + f4 + ...) + fn]

function cube(x) {
    return x * x * x;
}



function simpson(f, a, b, n, k, answer){
    h = (b-a)/n
    return k === 0
        ? simpson(f, a, b, n, k+1, answer + (h/3) * f(a+k*h))
        : k === n
        ? answer + (h/3) * f(a+k*h)
        : k % 2 === 0
        ? simpson(f, a, b, n, k+1, answer + 2*(h/3)*f(a+k*h))
        : simpson(f, a, b, n, k+1, answer + 4*(h/3)*f(a+k*h))
}

// function simpson(f, a, b, n){
//     result = 0
//     h = (b-a)/n
//     for (i = 0; i <= n; i++) {
//         if (i === 0 || i === n) {
//             result += (h/3)*f(a+i*h)
//         } else {
//             if (i % 2 === 0) {
//                 result += 2*(h/3)*f(a+i*h)
//             } else {
//                 result += 4*(h/3)*f(a+i*h)
//             }
//         }
//     }
//     return result
// }

console.log(simpson(cube, 0, 1, 100, 0, 0));
