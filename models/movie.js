var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CarSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 150},
    director: {type: String, required: true, maxlength: 200},
    year: {type: Number, required: true}
  }
);

//Export model
module.exports = mongoose.model('Movie', MovieSchema);