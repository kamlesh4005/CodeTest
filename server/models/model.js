var mongoose = require('mongoose');
var Brand = require('./brand');

var Schema = mongoose.Schema;

var modelSchema = new Schema({
    brandId: {type: Schema.Types.ObjectId, required: true, ref: 'Brand'},
    name: {type: String, required:true},
    imageUrl: {type: String, required:true},
    description: {type: String, required:true}
});

module.exports = mongoose.model('models', modelSchema);