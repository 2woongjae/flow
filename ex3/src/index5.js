/* @flow */
function test(obj: { a?: string }) {}

test({ a: 'hello' }); // 있을 때는 string 이어야 함.
test({ a: 3 }); // error : 있을 때 지만, string 이 아님.
test({}); // 없을 때
test({ a: undefined }); // undefined 값을 이용해서 없을 때랑 같은 의미로 표현하기도 함.
