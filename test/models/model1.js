module.exports = function(mongoose){

        var schema = new mongoose.Schema({

                name: String,

        });

        schema.methods.test = function(){
                return 'model1';
        }

        return schema;
}