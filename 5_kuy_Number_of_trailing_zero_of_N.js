function zeros (n) {
	let res = 0
	while ( n > 0 )
	{
		n /= 5
		res+= Math.trunc(n)
	}
}

let a = zeros(10000)