function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y
}

test(0, p());

// 책에 서술되있듯이 JS는 함수를 호출하기전에 계산을 다 끝내고 인자로
// 넘기는 방식인 Applicative-order evaluation 을 사용하고 있다.
// 
// 따라서 위의 케이스에서는 무한루프에 빠지게된다.
//
// 반면에 normal-order evaluation 언어라면 x값이 0이기 때문에 test 함수에서
// y값을 확인하지 않고 바로 True를 리턴하게 된다.
