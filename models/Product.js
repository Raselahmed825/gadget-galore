var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = {

  name: {
    type: String,
    default: '',
    trim: true,
    required: 'Name required'
  },
  
  type: {
    type: String,
    default: '',
    trim: true,

  },
  
  brand: {
    type: String,
    default: '',
    trim: true,

  },

  description: {
    type: String,
    default: '',
    trim: true,

  },
  
  price: {
    type: Number,
    //default: '',
    trim: true,
    required: 'price required'

  },
  
  quantity: {
    type: Number,
    default: '',
    required: 'Quantity required'

  },
  imageURL: {
    type: String,
    default: '',

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

var Product = mongoose.model('Product', ProductSchema, 'products');
module.exports = Product;
