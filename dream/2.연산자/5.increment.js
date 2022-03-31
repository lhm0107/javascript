// 증가 감소 연산자 Increment & Decrement operators
let a = 0;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);

//주의
//a++ 필요한 연산을 하고, 그뒤 값을 증가(감소)시킴
//++a 값을 먼저 증가(감소)시키고 필요한 연산을 함

// a = 0;
// let b = a++;
// console.log(b); a가 증가되기전에 출력되어서 값은 0
// console.log(a); b에서 이미 a가 증가되었기 때문에 값은 1

a = 0;
let b = ++a; // 값이 증가 되고 필요한 연산을 하여서 두 값은 모두 1이된다.
console.log(b);
console.log(a);
