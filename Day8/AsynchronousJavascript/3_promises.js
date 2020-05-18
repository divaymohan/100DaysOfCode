//Java Script Promises
const p = new Promise((resolve,reject)=>{
    //kick off some async work
    //....
    
    setTimeout(()=>{
        console.log('resolved');
        //resolve(1);
        reject(new Error('message'));
    },2000);
   
    //reject(new Error('message'));
});

p
    .then(result => console.log('Result',result))
    .catch(err => console.log(err.message));

