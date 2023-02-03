var arr=["ram","45","7800",'techpile',["Lucknow","224122"]]
// var name=arr[0]
// var age=arr[1]
// var salary=arr[2]
// var cmp=arr[4]

var [name,age,salary,cmp,[city,pincode]]=arr

console.log(`Name : ${name},
             Age : ${age}, 
             Salary : ${salary}, 
             Company :${cmp},
             City : ${city},
             Pincoode : ${pincode}`)