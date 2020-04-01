let mongoose = require('mongoose')
exports.User = mongoose.model ('User', require('../models/UserSchema')),
    bcrypt = require('bcrypt-nodejs'),
    shortid = require('shortid'),
    Schema = mongoose.Schema;

 let UserSchema = new Schema ({
     username: String,
     email: String,
     password: String,
     stream_Key: String,
 });
 
//  generateHash method will convert plain text password to bcrypt hash. 
 UserSchema.methods.generateHash = password => {
     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

//  take in a plain text password and validate it by comparing it to bcrypt hash stored 
 UserSchema.method.validPassword = function (password){
     return bcrypt.compareSync(password, this.password);
 };

//  generate a unique string that will be issue to users as their streaming key for RTMP clients
 UserSchema.methods.generateStreamkey = ()=> {
     return shortid.generate();
 };


 module.exports = UserSchema;