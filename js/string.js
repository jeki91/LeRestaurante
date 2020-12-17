//?              метод slice

//!		строка.slice(параметр1, параметр2);

function stringSlice(str) {
	console.log('использование оного параметра');
	// отрезаем первый символ
	console.log(str.slice(1)); //stringSlice('12345') -> '2345'
	// отрезаем первые два символа
	console.log(str.slice(2)); //stringSlice('12345') -> '345'
	// оставляем последний символ
	console.log(str.slice(-1)); //stringSlice('12345') -> '5'
	// оставляем последние два символа
	console.log(str.slice(-2)); //stringSlice('12345') -> '45'
	//==========================================================
	console.log('использование двух параметров');
	// отрезаем первый и последний символ
	console.log(str.slice(1, -1)); //stringSlice('12345') -> '234'
	// отрезаем первые 2 и последние 2 символа
	console.log(str.slice(2, -2)); //stringSlice('12345') -> '3'
	//вырезаем из строки символ между 1 номером и 3
	console.log(str.slice(1, 3)); //stringSlice('12345') -> '23'
}


//?         метод concat   он же "+'

//!		строка.concat (строка1, строка2, ...);

function stringConcat(str1, str2) {

	let resStr1 = str1.concat(str2); // qwerty + 12345 -> qwerty122345
	console.log(resStr1);

	let resStr2 = ''.concat(str1, str2);
	console.log(resStr1); // qwerty + 12345 -> qwerty122345

	// вместо concat можно использовать +

	let resStr3 = str1 + str2;
	console.log(resStr3); // qwerty + 12345 -> qwerty122345
}

//?         метод indexOf и lastIndexOf

//!		строка.indexOf(что ищем, [откуда начинать поиск]);

function stringIndexOf(string) {
	// 'Привет всем кто стремится к лучшему стремится'
	console.log(string.indexOf('стремится')); // 'Привет всем кто стремится ...' -> 16 
	//! c 16 позиции начинается слово 'стремится'
	
	console.log(string.indexOf('стремится', 18)); // 'Привет всем кто стремится ...' -> 36 
	//! c 36 позиции начинается слово 'стремится'. так как мы начинаем искать слово с 18 позиции

	console.log(string.indexOf('стремится', 38)); // 'Привет всем кто стремится ...' -> -1 
	//! слова 'стремится' нет в строке, если начать поиск с 38 позиции

	console.log(string.indexOf('стремится')); // 'Привет всем' -> -1
	//! такого слова нет в строке, поэтому -1 

	//?   метод lsatIndexOf будет искать последнее искомое значение в троке

	console.log(string.lastIndexOf('е')); // 'Привет всем' -> 9
}

