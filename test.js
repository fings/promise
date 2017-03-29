


let p = new Promise((resolve,reject)=>{
	resolve(1);
})

console.log(p);

p.then(val=>
	console.log(`resolve val is ${val}`)
	,val=>
	console.log(`reject val is ${val}`)
	)


//catch 处理reject;
p.catch(val=>console.log(`catch val is ${val}`))

