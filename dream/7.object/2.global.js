console.log(this);
console.log(globalThis);
console.log(NaN);
console.log(Infinity);
console.log(undefined);

eval('const num = 2 ; console.log(num)');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('12.43'));
console.log(parseInt('11'));

//URL (URI Uniform Resorce Identifier 의 하위개념)
//아스키 문자로만 구성되어야함
//한글이나 특수문자는 escape 처리해야한다.

const URL = 'https://드림코딩.com';
const encoded = encodeURI(URL);

console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
encodeURIComponent(part);
