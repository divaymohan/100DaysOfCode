const logger = require('./logger')
const log = require('./logger2');
//const log1 = require('./logger3');
const path = require('path');
const os = require('os');
const file = require('fs');
const Lograise = require('./raise_event_from_logger');
const EventEmitter = require('events');

//logger.log(logger);
//logger.log("hey i am divay");
//log("Hey I am Divay Mohan");
var _paths = path.parse(__filename);
//console.log(_paths);
//console.log("Total Memory:: " + (os.totalmem()));
//console.log("Free Memory :: " + os.freemem());
//asynchronous methos
file.readdir('./',function(err,files){
    if(err) console.log('Error',err);
    else console.log('Result',files);
});
//synchronous methods
const f = file.readdirSync('./');
console.log(f);


const raisel = new Lograise.log();
raisel.on('printing',(arg)=>{
    console.log(arg);
});
raisel.log("hey i am here");



