const EvenEmitter = require('events');//class
const emitter = new EvenEmitter();

//register a listner
emitter.on('messageLogged',function(){
    console.log('listner called')
});
//raise an event
emitter.emit('messageLogged');
//Making a noise

//event argument
emitter.on('messageOn',function(arg){
    console.log(arg);
});
//with arrow function
emitter.on('messageOn',(arg)=>{
    console.log(arg);
});
emitter.on('logging',(arg)=>{
    console.log(arg);
});
//raise an event with args
emitter.emit('messageOn',{ id:1,url:"http://"});

//Excersice
//raise loging
emitter.emit('logging',{message:"Divay Is Loging"});



