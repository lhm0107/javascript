const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);

console.log(text[0]);
console.log(text[1]);
console.log(text.charAt(0));
console.log(text.charAt(1));

console.log(text.indexOf('l')); // 처음 찾은 문자순서를 반환
console.log(text.lastIndexOf('l')); // 뒤에서 처음 찾은 문자순서를 반환

console.log(text.includes('tx'));
console.log(text.includes('h')); //포함하는 문자 확인
console.log(text.includes('H')); // 대소문자 구분

console.log(text.startsWith('h'));
console.log(text.startsWith('H')); // 첫시작 문자 확인 대소문자구분됨
console.log(text.endsWith('!')); // 끝나는 문자 확인 대소문자구분됨

console.log(text.toUpperCase()); // 모두 대문자로 변환
console.log(text.toLowerCase()); // 모두  소문자로 변환

console.log(text.substring(0, 3)); // 0~ 3번째 글자를 추출
console.log(text.slice(2)); // 앞에서 2번째 이후 글자부터 출력
console.log(text.slice(-2)); // 뒤에서 2번째 글자 출력

const space = '                       space           ';
console.log(space);
console.log(space.trim()); //빈칸을 없애줌

const longText = 'Get to the, point';
console.log(longText.split(' ')); // 띄어쓴 단위로 배열 생성
console.log(longText.split(' ', 2)); // 띄어쓴 단위에서 2개만을 배열 생성
console.log(longText.split(',')); // ,를 사용한 단위로 배열 생성
