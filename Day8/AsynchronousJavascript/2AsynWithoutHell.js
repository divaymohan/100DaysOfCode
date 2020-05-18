console.log('Before');
//non blocking function
getUser(1,getRepos);


function displayCommits(commits){
    console.log(commits);
}

function displayRepo(repos){
    console.log(repos);
    getCommits(repos[0],displayCommits);
}
function getRepos(user){
    getRepositories(user.gitHubUsername,displayRepo);
}



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
function getCommits(name,callback){
    setTimeout(()=>{
        console.log("Reading the commits from github..!!");
        callback(['c1','c2','c3']);
    });
}