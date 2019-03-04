const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema
({
  nom : String,
  address : String,
  contact : String,
  secteur : String
});

module.exports = mongoose.model('Client', ClientSchema);
