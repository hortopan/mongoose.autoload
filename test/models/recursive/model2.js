module.exports = function(mongoose){

	let schema = new mongoose.Schema({
		name: String,
	});

	schema.methods.test = function(){
		return 'model2';
	}

	return schema;
}