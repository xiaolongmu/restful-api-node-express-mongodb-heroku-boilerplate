var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
	slug : { type: String, lowercase: true, required: true, unique: true },
	name : { type: String, required: true, validate: [nameValidation, 'Name cannot be blank.']},
	upvotes: {type: Number, default: 0},
	photo: String,
	person: String,
	dateAdded : { type: Date, default: Date.now },
})

// export 'Person' model so we can interact with it in other files
module.exports = mongoose.model('Person',personSchema);