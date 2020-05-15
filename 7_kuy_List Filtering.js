function filter_list(l) {

	let answer = []
	for (let i in l)
	{
		if (typeof l[i] === 'number')
			answer.push(l[i]);
	}
	return (answer)
}

let a =filter_list([1,2,'a','b','23'])
console.log(a)

