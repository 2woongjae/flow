/* @flow */
let literal_a: boolean = true;
const literal_b: string = '0';
const literal_c: number = 0;
const literal_d: null = null;
const literal_e: void = undefined;

let wrapping_a: Boolean = new Boolean(true);
const wrapping_b: String = new String('0');
const wrapping_c: Number = new Number(0);

literal_a = new Boolean(false); // error
wrapping_a = false; // error
