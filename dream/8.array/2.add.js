const fruits = ['π', 'π', 'π', 'π'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

// μΆκ° μ­μ μ μ’μ§ μμ λ°©μ
fruits[6] = 'π'; // 2κ°μ λΉκ³΅κ°μ΄ μκΈ°κΈ°λλ¬Έ
console.log(fruits);

delete fruits[1]; // μ§μμ§ λΉκ³΅κ°μ΄ μκΈ°κΈ°λλ¬Έ
console.log(fruits);
