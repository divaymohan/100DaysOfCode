async function sentEmail(){
    try{
        const customer = await getCustomer(1);
        console.log('Customer: ',customer);
        if(customer.isGold){
            const topMovies = await getTopMovies(customer);
            console.log('Top Movies: ',topMovies);
            await sendEmail(customer.email,topMovies);
            console.log('Email sent...');
        }
        
    }catch(err){
        console.log('Error: ', err.message);
    }
   
}
sentEmail();




function getCustomer(id) {
    return new Promise((resolve,reject)=>{
        //some async code 
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: false, 
              email: 'email' 
            });
          }, 4000);

    });
      
}
  
function getTopMovies() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000);
        });
}
  
function sendEmail(email, movies) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve();
          }, 4000);
    });
    
}