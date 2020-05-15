const express = require('express');
const app = express();

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

//for all the courses
app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('the course not found with given id');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
});