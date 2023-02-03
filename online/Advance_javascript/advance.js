student={
	name:"ravi",
	age:20,
}

function setStudent(key,value)
{
	student[key]=value
}

console.log("Before calling",student)
setStudent("name","Awnish")
console.log("After calling",student)

// state variable
var state={
	student:{
	name:"pawan",
	class:"12th"
	}
}
// set state function=>custom
function setState(object)
{ state=object; }
let newStudent={
	name:"Ajeet",
	class:"10th"
}
console.log("before colling",state.student);
setState({student:newStudent})
console.log("After colling",state.student);