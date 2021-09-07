// varible

// 

var VictoriaAge = 18; // всі числа 1, 2, 3, 4, 12.123, і тд
var VictoriaName = "Victoria"; // строки, будь які рядки
var isVikaGoodGirls = true; // логічні вирази, так або ні
var anyNumber = 356;



// console.log()
var anyText = "ТАКОЖ БУДЬ ЯКИЙ текст"

console.log("будь який текст", anyText);


console.log("VictoriaName", VictoriaName);
console.log("isVikaGoodGirls", VictoriaName);

// основні математичні операції 

var firstAnyNumber = 356;
var secondAnyNumber = 512;
var result;

console.log("1 number: ", firstAnyNumber);
console.log("2 number: ", secondAnyNumber);
console.log("result: ", result);
console.log("< # >\n")

result = firstAnyNumber + secondAnyNumber;

console.log("result = firstAnyNumber + secondAnyNumber: ", result);
console.log("< # >\n")

result += secondAnyNumber;

console.log("result += secondAnyNumber: ", result);
console.log("< # >\\n")

result -= secondAnyNumber;

console.log("result -= secondAnyNumber: ", result);
console.log("< # >\n")

result *= firstAnyNumber;
console.log("result *= firstAnyNumber: ", result);
console.log("< # >\n")

result /= firstAnyNumber;
console.log("result /= firstAnyNumber: ", result);
console.log("< # >\n")

result %= secondAnyNumber;
console.log("result %= secondAnyNumber: ", result);
console.log("< # >\n")

console.log("result: ", result);

result = result + 1;

console.log("result + 1:", result);

result += 1;

console.log("result += 1 ", result);

result++;

console.log("result++ ", result);

// об'єкти 

var VictoriaData = {
	age: 18,
	name: "Vika",
	surname: "Bohach",
	isGoodGirl: true
} 



console.log("VICTORIA AGE:", VictoriaAge);
console.log("VICTORIA AGE:", VictoriaData.age);
console.log("VICTORIA DATA" ,VictoriaData);

// оператори порівняння

if (VictoriaData.age) {
	console.log("VICTORIA HAS AGE");
}

if (VictoriaData.age == '18') {
	console.log("VICTORIA HAS AGE, AND HER AGE IS EQUAL 18");
}

if (VictoriaData.age === '18') {
	console.log("VICTORIA HAS AGE, AND HER AGE IS EQUAL 18, AND IS STRING");
} else {
	console.log("VICTORIA HAS AGE, AND HER AGE IS EQUAL 18, AND IS NUMBER NOT STRING");
}

if (VictoriaData.age != '3') {
	console.log("VICTORIA IS NOT CHILD");
}

if (VictoriaData.age !== '3') {
	console.log("VICTORIA IS NOT CHILD TWICE");
}

if (VictoriaData.age !== '18') {
	console.log("VICTORIA`S AGE DATA TYPE IS NUMBER");
}

if (VictoriaData.age >= 18) {
	console.log("VICTORIA IS ADULT");
}

if (VictoriaData.age > 18) {
	console.log("VICTORIA IS OLDER THAN 18");
} else {
	console.log("VICTORIA IS NOT OLDER THAN 18");
}

if (VictoriaData.age <= 18) {
	console.log("VICTORIA IS 18 OR LESS YEARS OLD");
}

if (VictoriaData.age < 100) {
	console.log("VICTORIA IS NOT GRANNY");
}

// Масиви як тип данних

var numArr = [1,2,3,4];

var StringsArr = ["String One", 'String Two', `String Three`];

console.log("StringsArr:", StringsArr);

var ObjectsString = [{one: "one"}, {two: "two"}, {three: "three"}];

console.log("ObjectsString:", ObjectsString);

var VikasDataArr = [ VictoriaName, VictoriaAge, isVikaGoodGirls, VictoriaData ];

console.log("VikasDataArr:", VikasDataArr);

console.log("numArr[0]:", numArr[0])
numArr[0] = 0;
console.log("numArr[0]:", numArr[0])

console.log("numArr.length", numArr.length);

console.log("numArr[length]", numArr[numArr.length]);

delete numArr[numArr.length];

console.log("numArr.length", numArr.length);

console.log("numArr[numArr.length]", numArr[numArr.length]);

numArr.splice(numArr.length, 1);

console.log("numArr.length", numArr.length);

console.log("numArr[numArr.length]", numArr[numArr.length]);


// Логічні оператори або, але, не

if (VictoriaAge >= 18 && VictoriaAge < 21) {
	console.log("VIKA IS TEEN");
}

if (!(VictoriaAge >= 0 && VictoriaAge < 18)) {
	console.log("VIKA IS NO TEEN");
}

if (VictoriaAge === 18 || VictoriaAge === 19) {
	console.log("Victoria is 18 or 19 years old");
}

if (!(VictoriaAge === 6 || VictoriaAge === 2) &&
	!(VictoriaAge === 19 || VictoriaAge === 28) &&
	!(VictoriaAge === 99 || VictoriaAge === 1)) {
	console.log("VICTORIA AGE IS NOT 6 or 2, and not 19 or 28, and not 99 or 1");
}



