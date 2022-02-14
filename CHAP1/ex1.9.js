function inc(a) {
    return a + 1;
}

function dec(a) {
    return a - 1;
}

function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
}
// 첫번째 plus함수는 a가 0이 아닐때 inc함수를 리턴한다
// 이때 inc 함수의 인자인 plus함수가 a === 0일때까지
// 끝나지 않으므로 inc함수의 스택이 쌓이게 된다
// 따라서 이 함수는 recursive function 이다.

function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
}
// 두번째 plus함수는 plus함수를 리턴하는데 a === 0 일때 b를 리턴하면서
// 함수를 종료할 수 있다. 따라서 이 함수는 iterative function이다
