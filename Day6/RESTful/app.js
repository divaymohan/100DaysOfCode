const express = require('express');
const Joi = require('joi');
const app = express();
//used to parse the request body in json format
app.use(express.json());
//crate a dummy array
const person = [
    {id:1,name:"divay",age:31},
    {id:2,name:"diksha",age:43},
    {id:3,name:"shekher",age:31},
    {id:4,name:"anand",age:31},
    {id:5,name:"tushar",age:31},
    {id:6,name:"rak",age:31},
    {id:7,name:"ayush",age:31},
    {id:8,name:"rohit",age:31},
    {id:9,name:"shushant",age:31},
    {id:10,name:"kamlesh",age:31}
];

//get request for all the persons
app.get('/api/person/', (req, res) => {
  res.send(person);
});

//get request for one person with person id
app.get('/api/person/:id', (req, res) => {
    const course = person.find((p)=>{
        return p.id === parseInt(req.params.id);
    });
    if(course===undefined) return res.status(404).send("Requested element not found..!!");
    res.send(course);
});


//post request to add a person
app.post('/api/person/', function (req, res) {
    //validate input
   const scheme = {
       name: Joi.string().min(3).required(),
       age: Joi.number().integer().min(10).max(100)
   };
   const joival = Joi.validate(req.body,scheme);
   if(joival.error){
       return res.status(400).send(joival.error.details[0].message);
   }
    const per = {
        id: person.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age)
    };
    person.push(per);
    res.send(joival.value);
});

//put request
app.put('/api/person/:id',(req,res)=>{
    //look up the course
    //if not existing , return 404
    const per = person.find((p)=>{
        return p.id === parseInt(req.params.id);
    });
    if(per === undefined){
        return res.status(404).send(`Person Not exist with id ${req.params.id}`);
    }


    //validate
    //if invalid, return 404 -Bad Request
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number().integer().min(15).max(100)
    };
    const val = Joi.validate(req.body,schema);
    if(val.error){
        return res.status(400).send(val.error.details[0].message);
    }
    per.name = req.body.name;
    per.age = parseInt(req.body.age);

    //Update course
    //Return the update course
    res.send(person);
});

//delete the course
app.delete('/api/person/:id',(req,res)=>{
    //look up the course
    const pers = person.find((p)=> {
        return p.id === parseInt(req.params.id);
    });
    if(!pers) return res.status(404).send("The person with requested id not found");
    //Not exist return 404
    const index = person.indexOf(pers);
    person.splice(index,1);
    res.send(person);

});

//we can overcome the repeatation of code by creating a function

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required(),
        age: Joi.number().integer().min(15).max(100)
    };
    const result = Joi.validate(course,schema);
    return result;
}

//Listen At Port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening at port ${port} `);
});