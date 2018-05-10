var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var brandSchema = new Schema({
    name: {type: String, required:true}
});

module.exports = mongoose.model('brand', brandSchema);