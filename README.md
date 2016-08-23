#mongoose.models.autoload

Automatically load mongoose models/schemas from a directory.

Supports setting a *path* directory and allows *recursive* loading from a path.

##Installation

```
npm install mongoose.models.autoload --save
```

## Usage

```javascript

//load models and connect
var mongoose = require('mongoose.models.autoload')(require('mongoose').connect('mongodb://127.0.0.1/db'), require('path').join(__dirname, 'models'), true);

//use a model
var item = mongoose.models.test({name: 'tzaca paca'});
item.save();

//find
mongoose.models.test.findOne({name: 'tzaca paca'}, function(err,item){

});

//Make sure you pass mongoose to first parameter, your models path to second, boolean recursive or not 3rd param.
```

Put your models within the **./models** directory and add models in individual files:

```
module.exports = function(mongoose){

        var schema = new mongoose.Schema({
                name: String,
        });

        schema.methods.test = function(){
                return 'model1';
        }

        return schema;
}

```

Feel free to create your own hierarchy of files or directories!


## Release History

* 0.1.2 Bump version and mongoose
* 0.1.1 Fixed readme.md
* 0.1.0 Initial release
