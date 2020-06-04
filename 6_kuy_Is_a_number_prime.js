function isPrime(num) {
		if (num <= 1) return false;
		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				console.log("no prime")
				return false;
			}
		}
		console.log("prime")
		return true

}

console.log(isPrime(1))