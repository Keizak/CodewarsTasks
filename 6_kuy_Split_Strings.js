function solution(str) {
	let newtstr = []
	if (str.length === 0) {
		return (newtstr)
	}
	if (str.length !== 0) {
		str += '_'
	}
	for (let i in str) {

		if (i % 2 !== 0) {
			let newtext = str[i - 1] + str[i]
			newtstr.push(newtext)
		}

	}
	return (newtstr)
}
