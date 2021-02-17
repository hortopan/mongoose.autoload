#mongoose.models.autoload

Automatically load mongoose models/schemas from a directory.

Supports setting a *path* directory and allows *recursive* loading from a path.

##Installation

```
npm install mongoose.models.autoload --save
```

## Usage

```javascript

const run = async function(){

	//connect mongoose to database
	const connection = await require('mongoose').connect('mongodb://127.0.0.1/db', { useNewUrlParser: true });

	//load models to mongoose connected instance
	const db = require('mongoose.models.autoload')(connection, require('path').join(__dirname, 'models'), true);

	//create
	let item = db.models.test({name: 'tzaca paca'});
	await item.save();

	//find
	let itemFound = await db.models.test.findOne({name: 'tzaca paca'});
}

run();
```

Put your models within the **./models** directory and add models in individual files:

```javascript
module.exports = function(mongoose){

	var schema = new mongoose.Schema({
		name: String,
	});

	schema.methods.test = function(){
		return 'hello world';
	}

	return schema;
}

```

Feel free to create your own hierarchy of files or directories!


## Release History

* 0.3.1 Dependencies update
* 0.3.0 Fix compatibility with Mongoose v5.10.0 (await for connection before loading models)
* 0.2.0 Fix compatibility with Mongoose v5.9.19 
* 0.1.3 Bump version and Mongoose version
* 0.1.2 Bump version and Mongoose
* 0.1.1 Fixed readme.md
* 0.1.0 Initial release
