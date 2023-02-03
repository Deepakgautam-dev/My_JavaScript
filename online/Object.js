function Student(first,last,age,cls){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.class=cls;
}
var student1=new Student("deepak","gautam",22,"12th")
student1.village="lucknow";
console.log(student1)
console.log(student1.age)