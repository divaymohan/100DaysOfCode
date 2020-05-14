let person = {
    firstName : "divay",
    lastName : "mohan",
    age: 24,
    fullName : function(){ //we can access it as a function
        return this.firstName + " " + this.lastName;
    },
    set lname(lname){
        this.lastName = lname;
    },
    get lname(){ // we can access it as a property
        return this.lastName;
    }

};

console.log(JSON.stringify(person));
console.log(person.lname);
person.lname = "chaudhary";
console.log(person.lname);
var obj = {count: 0};


Object.defineProperty(obj,"reset",{
    get : function(){this.count=0}
});
Object.defineProperty(obj,"increment",{
    get : function(){
        this.count++;
    }
});
Object.defineProperty(obj,"decrement",{
    get : function(){
        this.count--;
    }
});
Object.defineProperty(obj,"add",{
    set : function(value){
        this.count+=value;

    }
});
Object.defineProperty(obj,"sub",{
    set : function(value){
        this.count -= value;
    }
});

//play with count:
obj.reset;
obj.add = 5;
console.log(obj.count);
obj.sub = 4;
console.log(obj.count);