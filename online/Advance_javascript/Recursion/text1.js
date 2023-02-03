
function a(i=1)
{
	if(i==11)
	{return;}
	else
	{
	console.log(i)
	i++
	a(i);
	}
}

a(1)