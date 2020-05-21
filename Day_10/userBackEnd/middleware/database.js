const mongoose =  require('mongoose');
const debugConnect = require('debug')('app:Connection');
const debugGetUser = require('debug')('app:Get');


//connect to database
mongoose.connect('mongodb://localhost/user-app-database')
    .then(()=>debugConnect('DataBase Connection Successfull...!!'))
    .catch(err=> debugConnect(err));

//prepare schema
const schema =  new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    userName: String,
    password: String,

});

//model class
const User =  mongoose.model('user',schema);

//get users
async function getUsers(){
    debugGetUser('Getting users from database..!!'); 
    return await User.find();
}
async function getUsersById(id){
    debugGetUser('Getting user from Database.');
    return await User.findById(id);
}
async function deleteUser(id){
    return await User.deleteOne({_id:id});
}
async function updateUser(id,nuser){
    const user = await User.findById(id);
    if(!user) return;
    user.firstName = nuser.firstName;
    user.lastName = nuser.lastName;
    user.age = nuser.age;
    user.userName = nuser.userName;
    user.password = nuser.password;
    return await user.save();
}

module.exports.getUsers = getUsers;
module.exports.getUsersById = getUsersById;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser; 


