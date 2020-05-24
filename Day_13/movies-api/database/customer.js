const mongoose = require('mongoose');

//schema
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        required: true,
        trim: true,
    },
    contectNumber: {
        type: Number,
        required: true,
        min: 0000000000,
        max: 9999999999
    },
    isGold:{
        type: Boolean,
        default: false
    }
});
//model
const Customer = mongoose.model('Customer',customerSchema);
//get
async function getCustomer(){
    const customers = await Customer.find();
    return customers;
}
//getbyid
async function getCustomerById(id){
    const result = await Customer.findById(id);
    return result;
}
//delete
async function deleteCustomer(id){
    const result = Customer.default({_id: id});
    return result;
}
//update


//addnew
