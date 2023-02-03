var  empInfo={
	name:"rohan",
	salary:50000,
	address:{
	     city:"lucknow",
	     pincode:226022
	}
}
empInfo.num=[1,2,3,4,5,6]
console.log(`name :${empInfo.name}
             salary : ${empInfo.salary}
             city : ${empInfo.address.city}
             pincode: ${empInfo.address.pincode}
             num : ${empInfo.num}`)


var div=empInfo.num
div.forEach((data) => {
    console.log(data)
});