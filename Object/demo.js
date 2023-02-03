var obj1={
	city:"lucknow",
	pincode:226022
}

var obj={
	name:"rahul",
	Age:'23',
    salary:'87889',
    demo(){
    console.log(`city :${obj1.city}, Pincode : ${obj1.pincode}`)
    }
}

console.log(`name : ${obj.name}, Age : ${obj.Age}, Salary :${obj.salary}`)

obj.demo()