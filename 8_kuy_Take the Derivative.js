function derive(coefficient,exponent)
{
let x = coefficient;
let y = exponent;
let mul = x*y;
let pow = Math.pow(7,2)
return(mul+'x^'+(y-1));
}

let a = derive(7,8)