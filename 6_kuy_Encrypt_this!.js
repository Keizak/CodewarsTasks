var encryptThis = function (text) {
	let words = text.split(" ")
	let crypttext = ""
	let cpypti = ""


	for (let i in words) {
		if (words[i].length === 1) {
			cpypti = words[i].charCodeAt(words[0])
		}
		if (words[i].length === 2) {
			cpypti = words[i].charCodeAt(words[0]) + words[i].substr(1, 1)
		}
		if (words[i].length === 3) {
			cpypti = words[i].charCodeAt(words[0]) + words[i].substr(2, 2) + words[i].substr(1, 1)
		}
		if (words[i].length > 3) {
			let first = words[i].charCodeAt(text[0])
			let swap1 = words[i].substr(1, 1)
			let swap2 = words[i].substr(words[i].length - 1, 1)
			cpypti = first + swap2 + words[i].slice(2, words[i].length - 1) + swap1
		}
		crypttext += cpypti + ' '
	}

	return (crypttext.trim())



}
console.log(encryptThis('A wise old owl lived in an oak'))
