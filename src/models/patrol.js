const mongoose = require('../database/index.js');

const PatrolSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    IP_Mobile: {
        type: String,
        require:true,
        lowercase:true,
    },
    checked: {
        type: String,
        require:true,
        lowercase:true,
    },
    date: {
        type: Date,
        require:true,
        default:Date.now
    }
});

const Patrol = mongoose.model('User', PatrolSchema);
module.exports = Patrol;