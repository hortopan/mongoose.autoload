var should = require('chai').should();

describe('#load models', function() {

	var mongoose = require('mongoose');

	it('load model', function() {
		require('../index')(mongoose, './test/models').models.model1.should.be.a('function');
	});

	it('method function', function() {
		new mongoose.models.model1().test().should.equal('model1');
	});	
});

describe('#load models recursive', function() {

	var mongoose = require('mongoose');

	it('load model recursive', function() {
		require('../index')(mongoose, './test/models', true).models.model2.should.be.a('function');
		new mongoose.models.model1().test().should.equal('model1');
	});

	it('method function', function() {
		new mongoose.models.model2().test().should.equal('model2');
	});	

});
