'use strict';
function countBits(n) {
	// Program Me
	let a = n.toString(2);
	let result = 0;

	for (let i = 0; i < a.length; i++) {

		if (a[i] == '1') {
			result = result + 1;
		}

	} return result;
};
//-------------------------------------------------
function getAverage(marks) {
	//TODO : calculate the downwar rounded average of the marks array
	let sum = 0;

	for (let i = 0; i < marks.length; i++) {
		sum = sum + marks[i]
	}

	let mid = Math.floor(sum / marks.length);
	return mid;
}
//-------------------------------------------------

function reverseWords(str) {
	let arr = str.split(' ');

	let reverse = arr.reverse();

	str = reverse.join(' ');

	return str; // reverse those words

}


//-------------------------------------------------

function squareSum(numbers) {

	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		let a = Math.pow(numbers[i], 2);
		sum = sum + a;
	}
	return sum;
}

//-------------------------------------------------

function flip(d, a) {
	//numbers.sort((a, b) => b - a);
	if (d == 'R') {
		return a.sort((a, b) => a - b);
	} else if (d == 'L') {
		return a.sort((a, b) => b - a);
	} else {
		return 'Error';
	}
}

//-------------------------------------------------
function setAlarm(employed, vacation) {
	if (vacation == true || employed == false) {
		return false;
	} else {
		return true;
	}

}

//-------------------------------------------------
function arrayPlusArray(arr1, arr2) {
	let sum1 = 0,
		sum2 = 0;

	for (let i = 0; i < arr1.length; i++) {
		sum1 += arr1[i];
	}

	for (let i = 0; i < arr2.length; i++) {
		sum2 += arr2[i];
	}
	return sum1 + sum2;
	//return arr1 + arr2; //something went wrong
}

//-------------------------------------------------

function greet(name) {

	return `Hello, ${name} how are you doing today?`;
}
//-------------------------------------------------


function maskify(cc) {
	const result = cc.slice(-4);
	return result.padStart(cc.length, '#');
}
//-------------------------------------------------
function automorphic(n) {
	//your code here
	let a = String(n * n);

	const part = String(n);

	if (a.endsWith(part)) {
		return 'Automorphic';
	} else {
		return 'Not!!';
	}
}
//-------------------------------------------------
var arrayLeaders = numbers => {
	//return // some leaders
	let result = Array();

	for (let i = 0; i < numbers.length; i++) {
		let a = numbers[i];
		let sum = 0;
		for (let j = i + 1; j < numbers.length; j++) {
			sum = sum + numbers[j];
		}
		if (a > sum) {
			result.push(a);
		}
	} return result;
}
//-------------------------------------------------

function solve(a, b) {
	a = a.replace("*", "\\S*");
	var re = new RegExp(a);
	return b.match(re) == b ? true : false
}
//-------------------------------------------------
function DNAStrand(dna) {
	//your code here
	let arr = dna.split('');
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 'T') {
			newArr.push('A');
		} else if (arr[i] == 'A') {
			newArr.push('T');
		} else if (arr[i] == 'G') {
			newArr.push('C');
		} else if (arr[i] == 'C') {
			newArr.push('G');
		}
	}
	return newArr.join('');
}
//-------------------------------------------------



function doubles(s) {

	var prev = s;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i + 1]) {
			s = s.slice(0, i) + s.slice(i + 2);
		}
	}
	if (prev === s) return s;
	else return doubles(s);
}
//-------------------------------------------------
function productArray(numbers) {
	//your code here
	let result = Array();


	for (let i = 0; i < numbers.length; i++) {
		let p = 1;
		//let a = numbers[i];
		for (let j = 0; j < numbers.length; j++) {

			p = p * numbers[j];
		} result.push(p / numbers[i]);
	} return result;
}

//-------------------------------------------------
function arrayDiff(a, b) {
	const resA = a.filter(i => !b.includes(i));

	return resA;
}

//-------------------------------------------------
function adjacentElementsProduct(array) {
	// max product
	let res = array[0] * array[1];
	for (let i = 0; i < array.length; i++) {

		if (res < array[i] * array[i + 1]) {
			res = array[i] * array[i + 1];
		}
	}
	return res;
}

function adjacentElementsProduct(array) {
	let newArr = []
	for(i=0; i < array.length-1; i++){
	  newArr.push(array[i]*array[i+1])
	}
	return Math.max(...newArr)
 }
//-------------------------------------------------


function isValidWalk(walk) {
	//insert brilliant code here
	if (walk.length != 10) {
		return false;
	} else {
		let countW = 0,
			countE = 0,
			countS = 0,
			countN = 0;

		for (let i = 0; i < walk.length; i++) {
			if (walk[i] == 'w') {
				countW += 1;
			}
			if (walk[i] == 's') {
				countS += 1;
			}
			if (walk[i] == 'e') {
				countE += 1;
			}
			if (walk[i] == 'n') {
				countN += 1;
			}
		}
		console.log(`W = ${countW}\nE = ${countE}\nN = ${countN}\nS = ${countS}\n`);

		if (countN == countS && countW == countE) {
			return true
		} else return false;
	}
}



function isValidWalk (walk)              {                                                                      
	const north = walk.filter(item => { return item === "n" }).length;
	const south = walk.filter(item => { return item === "s" }).length;
	const east = walk.filter(item => { return item === "e" }).length;
	const west = walk.filter(item => { return item === "w" }).length;
	
	return walk.length === 10 && north === south && east === west;
 }

function iqTest(numbers) {
	// ...
	let odd = 0; //нечетное
	let even = 0; // четное

	let arr = numbers.split(' ');
	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] % 2) == 0) {
			even += 1;
		} else {
			odd += 1;
		}
	} console.log('четное: ' + even, 'нечетное: ' + odd);

	if (even === 1) {
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) == 0) {
				return i + 1;
			}
		}
	}
	if (odd === 1) {
		for (let i = 0; i < arr.length; i++) {
			if ((arr[i] % 2) != 0) {
				return i + 1;
			}
		}
	}
}


function findShort(s) {
	let arr = s.split(' ');
	let shortWorld = arr[0].length
	for (let i = 0; i < arr.length; i++) {
		if (shortWorld > arr[i].length) {
			shortWorld = arr[i].length
		}
	} return shortWorld;

	//return Math.min.apply(null, s.split(' ').map(w => w.length)); одна строчка
}

//------------------------
function movie(card, ticket, perc) {
	let n = 0
	var costA = 0,
		costB = card;
	while (Math.ceil(costB) >= costA) {
		costA += ticket;
		console.log(costA + 'A');
		costB += ticket * Math.pow(perc, ++n);
		console.log(costB + 'B');
	}
	return n;
}

//============================
function litres(time) {
	return Math.ceil(time / 2);
}

//================================

function fakeBin(input) {
	// write code here
	let arr = input.split('');
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 5) {
			arr[i] = 0;
		} else {
			arr[i] = 1;
		}
	}
	console.log(arr);
	return arr.join('');
	//
}

//===================

function solution(value) {
	let str = value.toString();


	return (`Value is ${str.padStart(5, '0')}`);
}

//================================
function anagrams(word, words) {
	let wordSort = word.split('').sort().join('');
	console.log(wordSort);


	let wordsSort = [];

	let result = [];
	for (let i = 0; i < words.length; i++) {
		let temp = words[i].split('').sort().join('');
		wordsSort.push(temp);

		if (wordSort === wordsSort[i]) {
			result.push(words[i]);
		}
	}

	return result;

}


let sumArray = function (array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

function lifePathNumber(dateOfBirth) {
	// Your solution...
	let dateOfBirthArr = dateOfBirth.split('-');
	console.log('бьем строку на массив');
	console.log(dateOfBirthArr);

	let result = [];

	for (let i = 0; i < dateOfBirthArr.length; i++) {
		let numArr = dateOfBirthArr[i].split('');
		console.log(`бьем ${i + 1} элемент на массив`);
		console.log(numArr);

		console.log(`преобразовуем ${i + 1} элемент в массив чисел`);
		numArr = numArr.map(Number);
		console.log(numArr);

		console.log('sum');
		let sumEl = sumArray(numArr);

		while (sumEl > 9) {
			let sumElAr = `${sumEl}`.split('');
			sumElAr = sumElAr.map(Number);
			sumEl = sumArray(sumElAr);
		}

		result.push(sumEl);
	}
	console.log(result);

	let lifenum = sumArray(result);
	console.log(lifenum);

	while (lifenum > 9) {
		let lifenumArr = `${lifenum}`.split('');
		lifenumArr = lifenumArr.map(Number);
		lifenum = sumArray(lifenumArr);
	}
	return lifenum;
}

function lifePathNumber(dateOfBirth) {
	return dateOfBirth.replace(/\D/g, '') % 9 || 9;
}


let charRepeat = function (str) {
	str = str.split('').sort().join('');
	for (let i = 0; i < str.length; i++) {

		if (str[i] == str[i + 1]) {

			return true;
		}

	}

	return false;
}


function nextHappyYear(year) {
	//your code here
	let newYear = year + 1;
	let newYearStr = String(newYear);

	while (charRepeat(newYearStr) == true) {
		newYear += 1;
		newYearStr = String(newYear);
	}
	return newYear;
}


function tripleX(str) {
	let x = 'x';
	let index;
	if (str.includes(x)) {
		index = str.indexOf(x);
		console.log(index);
	} else {
		return false;
	}
	if (str[index] == str[index + 1] && str[index + 1] == str[index + 2]) {
		return true;
	} else {
		return false;
	}
}


function rowWeights(array) {
	//your code here
	let firstTeam = 0;
	let secondTeam = 0;

	for (let i = 0; i < array.length; i++) {
		if (i % 2 == 0) {
			firstTeam += array[i];
		} else {
			secondTeam += array[i];
		}
	}
	return [firstTeam, secondTeam];
}

function validParentheses(parens) {
	//TODO 
	let open = '(';


	let countOpen = 0;
	let countClose = 0;


	for (let i = 0; i < parens.length; i++) {
		if (parens[i] == open) {
			countOpen += 1;
		} else {
			countClose += 1;

		}
		if (countClose > countOpen) {
			return false;
		}

	}


	if (countOpen != countClose) {
		return false;
	} else {
		return true;
	}
}

function partsSums(ls) {
	// your code
	let sum = 0;
	for (let i = 0; i < ls.length; i++) {
		sum += ls[i];
	}

	let newLs = [];
	newLs.push(sum);

	let x = sum;
	for (let i = 0; i < ls.length; i++) {
		x = x - ls[i];
		newLs.push(x);
	}
	return newLs;
}