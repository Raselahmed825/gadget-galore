var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  
  contactNO: {
    type: Number,
    //default: '',
    trim: true,
    required: 'contactNO required'
  },
  
  address: {
    type: String,
    default: '',
    trim: true,
    required: 'address required'
  },
  
  mailID: {
    type: String,
    default: '',
    trim: true,
    required: 'mailID required'
  },

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
