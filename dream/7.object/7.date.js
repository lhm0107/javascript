//UTC 기준 (협정세계시 1970년1월1일 UTC자정과의 시간차이를 ms단위로 나타냄)
console.log(new Date());
console.log(new Date('jun 5, 2022'));
console.log(new Date('2022-12-17T03:23:00'));

console.log(Date.now()); //(협정세계시 1970년1월1일 UTC자정과의 시간차이를 ms단위로 나타냄)
console.log(Date.parse('2022-12-17T03:23:00'));

const now = new Date();
now.setFullYear(2023);
now.setMonth(0);

console.log(now.getFullYear());
console.log(now.getMonth()); //0= 1월
console.log(now.getDate()); // 0 = 1부터 시작
console.log(now.getDay()); //0 = 일요일

console.log(now);
console.log(now.toDateString());
console.log(now.toString());
console.log(now.toTimeString());
console.log(now.toISOString()); //ISO 8601형식
console.log(now.toLocaleString('ko-KR'));
