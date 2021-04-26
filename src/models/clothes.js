'use strict';

const mongoose = require('mongoose');

const clothesSchema = mongoose.Schema({
  name: { type: String, required: true }, 
  quantity: { type: Number, required: true },
  size: { type: String, uppercase: true, enum: ['XS', 'S', 'M', 'L', 'XL']}
});

const clothesModel = mongoose.model('clothes', clothesSchema);

module.exports = clothesModel;