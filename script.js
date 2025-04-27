//your JS code here. If required.
const op = document.getElementById("output");


myPromise1().then((arr)=>{
	// op.textContent = 
	return myPromise2(arr);
}).then(filteredArr =>{
	op.textContent = filteredArr.join(", ");
	return myPromise3(filteredArr);
}).then(doubleArr=>{
	op.textContent = doubleArr.join(", ");
}).catch((err)=>{
	console.log(err);
})



function myPromise1() {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})	
}

function myPromise2(arr) {
	return new Promise((reslove, reject)=>{
		setTimeout(()=>{
			reslove(arr.filter((i)=>i%2==0))
		},1000)
	})	
}

function myPromise3(arr) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(arr.map(i=>i*2);
		},1000)
	})
	
}








