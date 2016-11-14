var mongoose = require('mongoose');

var DjSchema = new mongoose.Schema({
	djName: String,
	email: String,
	region: String,
	price: Number,
	genres: [{type: String, ref:'Genre'}],
	biography: String,
	references: [{type: String, ref: 'Reference'}],
	upvotes: {type: Number, default: 0},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

DjSchema.methods.upvote = function(cb) {
	this.upvotes += 1;
	this.save(cb);
};

mongoose.model('Dj', DjSchema);


