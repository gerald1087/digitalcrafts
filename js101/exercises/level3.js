function lvl3exercise1 () {
  // Create a "hello" and a "world", return the concatenation of the two
	//Way 1
	var str1  = "hello ";
	var str2  = "world";
	return str1.concat(str2);
	
	//Way 2
	return "hell " + "world";
}
console.log(lvl3exercise1());

function lvl3exercise2 () {
  // Create a "hello" and a 12, return the concatenation of the two
	//Way 1
	var str1 = "hello ";
	var num = 12;
	return str1.concat(num);

	//Way 2
	return "hello " + 12;
}
console.log(lvl3exercise2());

function lvl3exercise3 () {
  // Create a variable that equals 12 and convert it to a string with concatenation. Return it.

	var num = 12
	return "Output: " + num.toString();
}
console.log(lvl3exercise3());

function lvl3exercise4 () {
  // Create a "hello world!" string. Return the length of the string

	var str1 = "hello world!";
	return str1.length;
}
console.log(lvl3exercise4());

function lvl3exercise5 () {
  // Create a "hello world!" string. Return the index of the word "world".

	var str1 = "hello world!";
	return str1.indexOf("world");
}
console.log(lvl3exercise5());
