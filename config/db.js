//never expose creds in the code

let atlasDB ="mongodb+srv://dbuser:ZuRbLlFbLv413prM@cluster005.2fhz4vz.mongodb.net/products?retryWrites=true&w=majority";

let mongoose = require('mongoose');

module.exports = function(){

    //connect to the database
    mongoose.connect(atlasDB);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console,'Connection Error:'));
    mongodb.once('open',()=>{
        console.log('connected to mongoDB')
    });

    return mongodb;
}
