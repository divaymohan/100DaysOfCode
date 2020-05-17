//express modules
const express = require('express');
const app = express(); 
const debugDev = require('debug')('app:dev');
const debugStartup = require('debug')('app:startup');

//third party module
const morgan = require('morgan');
const helmet = require('helmet');

//cunstemized midllewares
const logger = require('./middleware/logger');
const auth = require('./middleware/authenticate');

//user routes
const users = require('./routes/user');


//middleware from express third party modules
//express middleware
app.use(express.json()); //req.body
app.use(express.urlencoded());
app.use(express.static('public'));

//third party middleware
app.use(helmet());
//how to eneble something in developement environment
if(app.get('env') === 'development'){
    debugDev('welcome to development enviroment..!!');
    debugDev('enebling morgan to simply print the requist..!!');
    app.use(morgan('tiny'));
    debugDev('morgan enebled..!');
}

//local routes
app.use('/api/users',users);

//customized middleware
app.use(logger);
app.use(auth);

 //listen at port
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    debugStartup(`listening at port ${port}`);
});