var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  
  contact: {
    type: Number,
    //default: '',
    trim: true,
    required: 'contact required'
  },
  
  address: {
    type: String,
    default: '',
    trim: true,
    required: 'address required'
  },
  totalprice: {
    type: Number,
    //default: '',
    trim: true
  },
  
  
  products: [],

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
}

var Order = mongoose.model('Order', OrderSchema, 'orders');
module.exports = Order;
