module.exports = function(app){

 var orders = require('./../controllers/orders.server.controller.js');
 
 app.route('/api/orders')
	.get(orders.list)
	.post(orders.create);

app.param('orderId', orders.orderByID);


}
