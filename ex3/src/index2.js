/* @flow */
const a: string = 'a';

function f(b: number): number {
  return b + 10;
}

console.log(f(5));
f(a); // error : number 타입 자리에 string 이 들어감.
