//constructor to an object so we can create any number of object..!!
print = (value)=> console.log(value);
function Person(fname,lname,id,age,nationality){
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.nationality = nationality;
    this.language = "english";
    this.name = ()=> this.firstName + " " + this.lastName;
}
let father = new Person("sompal","singh",1,45,"india");
let mother = new Person("kiran","vati",2,45,"india");
console.log(father.name()); 
mother.occupation = "house wife";
console.log(JSON.stringify(mother));

//prototype Inheritance
Person.prototype.place = "kutubgarh"; //we can add property to the constructor using prototype
Person.prototype.ages = function(){
    return this.age ;
} 
let brother = new Person("tinkal","chaudhary",3,56,"india");
console.log(JSON.stringify(brother));
console.log(brother.place)
print(brother.ages());

let brother1 = new Person("tinkal","chaudhary",3,56,"india");
Object.defineProperty(brother1,"language",{value:"hindi"});

print(brother1.language)