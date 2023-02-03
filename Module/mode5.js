var name ="rohan"
var age=50

function calc(...y)
{
   // y=[20,30,30]
   var s=y.reduce((t,data)=>{
       t=t*data
       return t
   })
   return s
}

var compny="Techpile"
export default compny

export {name,age,calc}