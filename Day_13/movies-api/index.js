const mongoose =  require('mongoose');

const express = require('express');
const app = express();

app.use(express.json());

//connect to database
mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Database Connected.'))
    .catch(err=>console.error(err.message));

app.get('/',(req,res)=>{
    res.send(`i am from movie api`);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening at port : ${port}`);
});
