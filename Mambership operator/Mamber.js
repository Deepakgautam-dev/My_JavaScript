var obj={city: "lucknow", pincode: 283766}

console.log("name" in obj)  // false
console.log("city" in obj)  // true
console.log(obj.hasOwnProperty('name'))  // false
console.log(obj.hasOwnProperty('pincode'))  // true
