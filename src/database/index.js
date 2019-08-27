const mongoose = require('mongoose');
const url = require('../config/db').url

mongoose.connect(url, {useNewUrlParser: true}, 
(err, db) => {

    if(err)
        console.log(err);
    else
        console.log(db);
});
mongoose.Promise = global.Promise;

module.exports = mongoose;