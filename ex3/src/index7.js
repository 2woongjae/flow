/* @flow */
function test(a: string = 'hello') {
  // ...
}

test('world'); // 있을 때. a = 'world' 가 된다.
test(0); // error : 있지만, string 이 아니라서 타입 에러
test(); // 없을 때. a = 'hello' 가 된다.
test(undefined); // undefined 값을 이용해서 없을 때랑 같은 의미로 표현하기도 함. a = 'hello'
