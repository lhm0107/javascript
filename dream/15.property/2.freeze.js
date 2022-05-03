// 동결 Object.freeze 하게되면 추가안됨 삭제 안됨 쓰기 안됨 속성재정의 안됨
// 단, 얕은 동결 , 내부의 오브젝트는 변경이 가능
const ellie = { name: 'ellie' };
const dog = { name: '와우', emoji: '🐶', ower: ellie };
Object.freeze(dog);
ellie.name = '엘리';
console.log(dog);

//밀봉 Obeject.seal 값의 수정은 가능 하지만 추가 안되고 삭제 안되고 속성 재정의 안됨
const cat = { ...dog };
//Object.assign(cat, dog); 오브젝트를 복사함
Object.seal(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);
console.log(Object.isFrozen(cat));
console.log(Object.isFrozen(dog));
// 확장금지 preventExtensions  수정 가능 , 삭제 가능,  추가 만 불가
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '야옹';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
