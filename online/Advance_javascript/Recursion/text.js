

function a(n,i=1)
{
	if(i==11)
	{return;}
	else
	{
	console.log(`${n}*${i}=${n*i}`)
	i++
	a(n,i);
	}
}

a(3)