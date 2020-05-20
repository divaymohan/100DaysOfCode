//load module
const mongoose = require('mongoose');
const debugConnect = require('debug')('app:connect');
const debugQuery = require('debug')('app:query');
const debugGet = require('debug')('app:Get');
const debugCreate = require('debug')('app:Create');
const debugUpdate = require('debug')('app:Update');
const debugDirectUpdate = require('debug')('app:DUpdate');
const debugDelete = require('debug')('app:Delete');
//connect
mongoose.connect('mongodb://localhost/userProfiling')
        .then(()=> debugConnect('Database Connected..!!'))
        .catch(err => debugConnect(err.message));
//prepare scheme
const schema = new mongoose.Schema({
    firstName: {type: String,required: true},
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
        //firstName: "suchna",
        lastName: "kumari",
        userName: "suchchi",
        age: 32,
        email: "suchi@kumari.gmail.com"
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
async function directUpdate(id){
    const result = await User.update({_id:id},{
        $set: {
            firstName: "Simbhi",
            age: 34
        }
    });
    return result;
}
async function deleteUser(id){
    const result = await User.deleteOne({_id:id});
    return result;
} 
async function run(){
    try{
        const user1 = await createUser();
        debugCreate(user1);
        const user2 = await getUsers(user1._id);
        debugGet(user2);
        const user3 = await update(user2._id);
        debugUpdate(user3);
        const user4 = await directUpdate(user3._id);
        debugDirectUpdate(user4);
        const res = await deleteUser(user1._id);
        debugDelete(res);

    }catch(ex){
        console.log(ex.message);
    }
    

}
run();