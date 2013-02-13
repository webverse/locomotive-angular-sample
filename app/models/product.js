var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var Product = new Schema();

Product.add({
  id: {type: Number, index: {unique:true}},
  category: {type:String, required:true},
  title: {type:String, required:true},
  google_id: {type:Number, required:true}
});

module.exports = mongoose.model('Product', Product);