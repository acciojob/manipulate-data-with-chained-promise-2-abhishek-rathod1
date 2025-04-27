const op = document.getElementById("output");

myPromise1()
.then(arr => {
	// arr is [1,2,3,4]
	return myPromise2(arr);
})
.then(filteredArr => {
	// filteredArr is [2,4]
	op.textContent = filteredArr.join(", ");
	return myPromise3(filteredArr);
})
.then(doubledArr => {
	op.textContent = doubledArr.join(", ");
})
.catch(err => {
	console.log(err);
})

function myPromise1() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4]);
		}, 3000);
	});
}

function myPromise2(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arr.filter(i => i % 2 == 0)); // Correct: directly return filtered array
		}, 1000);
	});
}

function myPromise3(arr) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(arr.map(i => i * 2)); // Use map to double values
		}, 1000);
	});
}
