function wangdi(a, b){
	var sum = a + b;
	var multiple = a * b;
	console.log("sum: " + sum);
	console.log(a);
	console.log(b);
	console.log(a + "+" + b + ": " + a + b);
	console.log(a * b);

	wangdi(2, 3);
	wangdi(3, 4);
}