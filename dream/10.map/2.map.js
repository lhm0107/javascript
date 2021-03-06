//Map
const map = new Map([
	['key1', 'π'],
	['key2', 'π'],
]); //μμ μκ΄ μμ΄ ν€μ κ°μ κ°μ§κ³  μλ€.
//ν€λ κ³ μ μ΄λ¦μ κ°μ§κ³ μμ΄μΌνλ©° , κ°μ μ€λ³΅ λμ΄λ μκ΄ μλ€.

console.log(map);

// μ¬μ΄μ¦
console.log(map.size);
//μ‘΄μ¬νλμ§ νμΈ (ν€κ° νμΈ)
console.log(map.has('key1'));
console.log(map.has('key6'));
//μν
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
//μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));
//μΆκ°
map.set('key3', 'π₯');
console.log(map);

//μ­μ 
map.delete('key3');
console.log(map);
map.clear(); // μ λΆ μ­μ 
console.log(map);
// μ€λΈμ νΈμμ μ°¨μ΄μ 
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: 'λ§μλ μ°μ ' };
const obj = {
	[key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
// μ¬μ© ν  μ μλ ν¨μκ° λ€λ₯΄λ€.

console.log(obj[key]);
console.log(map2.get(key));
