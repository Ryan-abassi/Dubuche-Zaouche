const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema
({
  nom : String,
  desc : String,
  debdate : String,
  findate : String,
  montant : Number,
  statut : String
});

module.exports = mongoose.model('Projet', ProjetSchema);
