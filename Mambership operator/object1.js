// var obj={Name:"saurabh",Age:23,Salary:45678}
// var obj1={Name:"deepak",Age:25,Salary:99678}
// var obj2={Name:"saurabh",Age:78,Salary:25678}

function demo(x,y,z)
{
	this.Name=x
	this.Age=y
	this.Salary=z
}
var obj = new demo("ram",34,46535)
var obj1 = new demo("deepak",23,535)
var obj2 = new demo("saurabh",44,3535)

console.log(obj)
console.log(obj1)
console.log(obj2)

console.log(obj.Name)
console.log(obj1.Age)
console.log(obj2.Salary)

obj1.City="Lucknow"
obj2.Pincode=224222

console.log(obj)
console.log(obj1)
console.log(obj2)

demo.prototype.Branch="MERN"

console.log(obj.Branch)
console.log(obj1.Branch)
console.log(obj2.Branch)

