'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../about.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.cart = function(req, res) {
	res.render('./../public/views/Cart.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.products = function(req, res) {
	res.render('./../public/views/Products.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.confirmation = function(req, res) {
	res.render('./../public/views/confirmation.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.help = function(req, res) {
	res.render('./../public/views/help.ejs', {
		user: req.user || null,
		request: req
	});
};
