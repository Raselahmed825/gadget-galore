'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/about').get(core.about);
	
	app.route('/index').get(core.index);
	app.route('/help').get(core.help);
	app.route('/cart').get(core.cart);
	//app.route('/products').get(core.products);
	app.route('/confirmation').get(core.confirmation);
};
