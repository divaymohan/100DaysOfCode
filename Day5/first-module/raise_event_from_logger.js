const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        //raise an event
        this.emit('printing',{id:1,name:"divay"});
    
    }

}

module.exports.log = Logger;