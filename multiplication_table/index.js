for(let i = 1; i < 10; i++) {
	let resultrow = [];
	for(let j = 1; j <= i; j++) {
		resultrow.push(`${i}*${j}=`+ ( i * j));		
	}
	console.log(resultrow.join(" "));
}