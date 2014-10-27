#mongoose.models.autoload

Automatically load mongoose models/schemas from a directory.

Supports setting a *path* directory and allows *recursive* loading from a path.

##Installation

```
npm install mongoose.models.autoload --save
```

## Usage

```javascript
require('mongoose.models.autoload')(require('mongoose'), require('path').join(__dirname, 'models'), true).connect('mongodb://user:pass@host/db');

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

* 0.1.1 Fixed readme.md
* 0.1.0 Initial release
