//all about functions
//function declaration
function printName(value){
    console.log(value);
}
//function expression
let add = function(a,b){ //also called as anonymous function
    return a+b;
};

//self Invoking Function
(function(){
    let x = 'x';
    console.log(x);
})();

//Arrow Function
const f = (x,y)=>x+y;

console.log(f(1,2));
//argument object
x = findMax(1,2,3,4,5);
function findMax(){
    let i;
    var max = -Infinity;
    for(i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
        
    }
    return max;

}
let print= (value)=> console.log(value);
print(x)

//call method
let Person1 = {
    fname : 'divay',
    lname : 'mohan'
};
let Person2={
    fname:"diksha",
    lname:"rajput"
};
let Person = {
    fullName : function(){ 
        return this.fname + " " + this.lname;
}
}
print(Person.fullName.call(Person1));
//apply() method

