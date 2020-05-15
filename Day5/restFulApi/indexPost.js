const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    {id:1 , name:'course1'},
    {id:2 , name:'course2'},
    {id:3 , name:'course3'},
    {id:4 , name:'course4'},
    {id:5 , name:'course5'},
    {id:6 , name:'course6'},
    {id:7 , name:'course7'},
    {id:8 , name:'course8'},
    {id:9 , name:'course9'},
    {id:10 , name:'course10'}
]

app.post('/api/courses',(req,res)=>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    console.log(req.body.name);
    courses.push(course);
    res.send(courses);

});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening at ${port}`);
});


