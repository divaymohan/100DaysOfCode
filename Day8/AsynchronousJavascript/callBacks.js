console.log('Before');
//non blocking function
getUser(1,(user)=>{
    //console.log('User',user);

    getRepositories(user.gitHubUsername,(repos)=>{
        console.log(repos);
    });
});
console.log('After');
function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading data from database..!!');
        callback({id: id, gitHubUsername: 'divay'});
    },2000);
}
function getRepositories(name,callback){
   setTimeout(()=>{
        console.log('Calling Github..!!');
        callback(['repo1','repo2','repo3']);
   },2000);
    

}