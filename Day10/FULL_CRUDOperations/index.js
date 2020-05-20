//load module
const mongoose = require('mongoose');
const debugConnect = require('debug')('app:connect');
const debugQuery = require('debug')('app:query');
const debugGet = require('debug')('app:Get');
const debugCreate = require('debug')('app:Create');
const debugUpdate = require('debug')('app:Update');
//connect
mongoose.connect('mongodb://localhost/userProfiling')
        .then(()=> debugConnect('Database Connected..!!'))
        .catch(err => debugConnect(err.message));
//prepare scheme
const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    age: Number,
    email: String
});

//model class
const User = mongoose.model('User',schema);
async function createUser(){
    //Create
    const newUser = new User({
        firstName: "carol",
        lastName: "Sami",
        userName: "carol.sami",
        age: 20,
        email: "sami.carol@gmail.com"
    });

    const result = await newUser.save();
    return result;
}
//get From DataBase
async function getUsers(id){
    const users = await User.findById(id);
    return users;
}
//update 
async function update(id){
    const user = await User.findById(id);
    if(!user){
        debugQuery('User with Given Id Is Not Available..!!');
        return;
    } 
    user.age = 54;
    await user.save();
    return user;
}
async function run(){
    const user1 = await createUser();
    debugCreate(user1);
    const user2 = await getUsers(user1._id);
    debugGet(user2);
    const user3 = await update(user2._id);
    debugUpdate(user3);

}
run();