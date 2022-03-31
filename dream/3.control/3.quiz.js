//quiz !!
let num = 2;

//짝수면 'good' 홀수면 'not good'

if (num % 2 === 0) {
	console.log('good');
} else if (num % 2 !== 0) {
	console.log('not good');
}

num % 2 === 0 ? console.log('good') : console.log('not good');

let emoji = num % 2 === 0 ? 'good' : 'not good';
console.log(emoji);
