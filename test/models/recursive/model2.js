module.exports = function(mongoose){

        var schema = new mongoose.Schema({

                name: String,

        });

        schema.methods.test = function(){
                return 'model2';
        }

        return schema;
}