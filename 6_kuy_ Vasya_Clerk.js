function tickets(peopleInLine) {
	console.log("имеющиеся клиенты с купюрами", peopleInLine)
	result = ''
	let min = 25

	let kassa = []

	for (let i in peopleInLine) {
		if (peopleInLine[i] === 25) {
			console.log("купюра", peopleInLine[i])
			min += 25
			result = "YES"
			let zdacha = peopleInLine[i] - 25
			kassa.push(peopleInLine[i])
			console.log("здача равна ", zdacha, " Касса равна ", kassa)
		}
		if (peopleInLine[i] === 50) {
			console.log("купюра", peopleInLine[i])
			let zdacha = peopleInLine[i] - 25
			if (kassa.length < 1) result = "NO"
			for (let k in kassa) {
				if (kassa[k] === zdacha) {
					kassa.splice(k, 1)
					// console.log("Касса после сдачи ",kassa)
					kassa.push(peopleInLine[i])
					console.log("здача равна ", zdacha, " Касса равна ", kassa)
					result = "YES"
					break
				} else {
					result = "NO"
				}
			}

		}
		if (peopleInLine[i] === 100) {
			console.log("купюра", peopleInLine[i])
			let zdacha = peopleInLine[i] - 25
			for (let k in kassa) {
				if (kassa[k] === 25 || kassa[k] === 50) {
					let newzdacha = kassa[k]
					let dopzdacha =  zdacha - newzdacha
					kassa.splice(k, 1)
					console.log("здача равна ", zdacha, " Первая купюра ", newzdacha, 'Осталось ', dopzdacha, ' Ищем дальше')
					if (kassa[k] === 25 || kassa[k] === 50) {
						newzdacha = kassa[k]
						dopzdacha -= newzdacha
						kassa.splice(k, 1)
						console.log("здача равна ", zdacha, "Вторая купюра ", newzdacha, 'Осталось ', dopzdacha, ' Ищем дальше')
						if ( dopzdacha > 0)
						{
							if (kassa[k] === 25 || kassa[k] === 50) {
								newzdacha = kassa[k]
								dopzdacha -= newzdacha
								kassa.splice(k, 1)
								console.log("здача равна ", zdacha, "Вторая купюра ", newzdacha, 'Осталось ', dopzdacha)
								console.log("Касса равна ", kassa)
								break
							}
						}
					}
					else {
						result = "NO"
						console.log(result)
						return (result)
					}
				}


			}
		}

	}
	console.log(result)
	return (result)

}

let a = tickets([ 50, 100, 100])