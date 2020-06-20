module.exports = function(mongoose){

	let schema = new mongoose.Schema({
		name: String,
	});

	schema.methods.test = function(){
		return 'model1';
	}

	return schema;
}