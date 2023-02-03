var a=20;

function demo()
{
	var b=30
	console.log("inside local scope of function a=",a)
	console.log("inside local scope of function b=",b)
}
demo()
	console.log("outside global scope of function a=",a)
	console.log("outside global scope of function b=",b)
