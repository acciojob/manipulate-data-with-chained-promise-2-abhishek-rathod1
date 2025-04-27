//your JS code here. If required.
const op = document.getElementById("output");


myPromise1.then(()=>{
	// op.textContent = 
	return myPromise2;
}).then(data2 =>{
	op.textContent = data2;
	return myPromise3;
}).then(data3=>{
	op.textContent = data3;
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
			reslove([arr.filter((i)=>i%2==0)])
		},1000)
	})	
}

function myPromise3() {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve([4,8])
		},1000)
	})
	
}








