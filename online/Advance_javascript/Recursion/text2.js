let n=5
let res=factorial(n,mul=1);
console.log('5 of factorial :',factorial(n,mul))
function factorial(n,mul=1)
{
	if(n==1)
	{
		console.log('If is running',mul,n)
		return mul;
	}
	else
	{
	console.log('Else is running',mul,n)
	mul=mul*n;
	n--
	return factorial(n,mul);
	}
}

