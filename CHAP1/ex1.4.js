function plus(a,b) { return a + b; }

function minus(a, b) { return a - b ;}

function a_plus_abs_b(a, b) {
    return ( b >= 0 ? plus : minus)(a,b);
}

// b가 0 보다 크면 더하고 0 보다 작으면 빼라는 함수이다.
// 따라서 a + |b| 임을 알 수 있다.
