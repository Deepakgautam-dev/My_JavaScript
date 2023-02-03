var obj1={
	1:1,
	2:2,
	3:34
} 

var x=Object.values(obj1)   //[1,2,3]
console.log(x)

for(var a of x)
{
	console.log(`${a} : ${obj1[a]}`)
}