const morgan = require('morgan');
const helet = require('helmet');
const express = require('express');
const Joi = require('joi');
const logger = require('./logger');
const auth = require('./authenticate');

const users = require('./routes/user');

const app = express(); 
//middleware from express
app.use(express.json()); //req.body
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(helet());

app.use('/api/users',users);

//how to eneble something in developement environment
if(app.get('env') === 'development'){
    console.log('welcome to development enviroment..!!');
    console.log('enebling morgan to simply print the requist..!!');
    app.use(morgan('tiny'));
    console.log('morgan enebled..!');
}

//customized middleware
app.use(logger);
app.use(auth);





 //listen at port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});