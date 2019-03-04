const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema
({
  nom : String,
  prenom : String,
  username : String,
  anniv : String,
  address : String,
  tel : String,
  mail : String,
  poste : String
});

module.exports = mongoose.model('Salarie', SalarieSchema);
