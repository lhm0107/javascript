//단항연사자 Unary operators
// + 양
// - 음
// ! 부정
let a = 5;
a = -a; //-1 * 5
console.log(a);
a = -a; // 1 * -5
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

//+ "숫자가아닌 타입들"을 사용하면 숫자로 변환하여 어떤값이 나오는지 확인 할 수 있다.
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+NaN);
console.log(+'text');
console.log(+undefined);

// !!"값"을 사용하여  값을 Boolean 타입으로 변경 할 수 있다.
console.log(!3);
console.log(!!3);
