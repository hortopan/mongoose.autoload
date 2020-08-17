const fs = require('fs');
const path = require('path');

function walkDir(dir) {
	let results = []
	let list = fs.readdirSync(dir)
	list.forEach(function(file) {
		file = dir + '/' + file
		let stat = fs.statSync(file)
		if (stat && stat.isDirectory()) results = results.concat(walkDir(file))
			else results.push(file)
		})
	return results;
}

module.exports = function(instance, loadPath = null, recursive = false){

	instance.models = {}
	
	if (!loadPath) loadPath  = './models';

	let files = [];
	if (!recursive){
		files = fs.readdirSync(loadPath);
	} else {
		files = walkDir(loadPath);
	}
	
	for (let i in files){

		let file = '';
		if (!recursive){
			file = path.resolve(loadPath , files[i]);
		} else {
			file = path.resolve(files[i]);
		}

		if (fs.statSync(file).isFile()){

			let name = path.basename(file);
			name = name.replace('.js','');
			instance.models[name] = instance.model(name, require(file)(instance));
		}

	}

	return instance;
}