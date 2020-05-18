console.log('Before');
//non blocking function
getUser(1,(user)=>{
    //console.log('User',user);

    getRepositories(user.gitHubUsername,(repos)=>{
        console.log(repos);
        getCommits(repos[0],(commits)=>{
            console.log(commits);
        })
        //this structure of code is called as CALLBACk HELL PROBLEM..!
    });
});
console.log('After');



function getUser(id){
    return new Promise((resolve,reject)=>{
        //async work
        setTimeout(()=>{
            console.log('Reading data from database..!!');
            resolve({id: id, gitHubUsername: 'divay'});
        },2000);
    });
    
}
function getRepositories(name){
    return new Promise((resolve,reject)=>{
         //async work
           setTimeout(()=>{
                console.log('Calling Github..!!');
                resolve(['repo1','repo2','repo3']);
            },2000);

    });
}
   
    
function getCommits(name){
    return new Promise((resolve,reject)=>{
        //async work
        setTimeout(()=>{
            console.log("Reading the commits from github..!!");
            resolve(['c1','c2','c3']);
        });

    });
    
}