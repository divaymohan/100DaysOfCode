console.log("hello");
function printHello(){
    const name = "hello iam divay mohan..!!";
    console.log("hello who are you" + name);
}
printHello();
var obj1 = {
    name:"divay",
    dob:"1-2-3",
    printName: function(){
        console.log(this.name);
    },
    printDob: function(){
        console.log(this.dob);
    }

}
console.log(obj1.printName());
console.log(obj1.printDob());
console.log(obj1.name);
