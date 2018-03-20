const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoodSchema = new Schema({
    name: {
        type:String,
        required:[true, 'Name field is required']
    },
    available : {
        type:Boolean,
        default:false
    }
});

const Good = mongoose.model('good', GoodSchema);

module.exports = Good;