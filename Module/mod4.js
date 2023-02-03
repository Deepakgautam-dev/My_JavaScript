function calc(...x)
{
	// x=[20,45,77]
	// var s=20
	// x.forEach((data)=>
	// {
	// 	s=s+data
	// })
	// return s
	
	var s=x.reduce((total,data)=>{
		total=total+data
	})
	return s

}
var name="RAHUL"
var age=24

export {name,age,calc}


var company="Techpile"
export default company