const express = require ('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const BodyParser = require ('body-parser');
const ClientController = require ('./Controllers/ClientController');
const ProjetController = require ('./Controllers/ProjetController');
const SalarieController = require ('./Controllers/SalarieController');

const Ind = express();
Ind.use(cors())

Ind.use(BodyParser.urlencoded({ extended: false}));
Ind.use(express.json());

//connection a la BDD client
mongoose.connect('mongodb://client:Max123@ds155845.mlab.com:55845/db-devoir-dubuchezaouch3',{ useNewUrlParser: true }, (err) =>
{
  if(err) {console.log(err);}
  else {console.log('connecté a la BDD');}
})

//appel des controllers client
Ind.post('/api/v1/CreeClient', ClientController.CreeClient);
Ind.get('/api/v1/AffClients', ClientController.AffClients);

Ind.get('/api/v1/SupprClient/:id', (req,res,next) => {
  next();
}, ClientController.SupprClient);

Ind.get('/api/v1/AffClient/:id', (req, res, next) => {
  next();
}, ClientController.AffClient);

Ind.put('/api/v1/MajClient/:id', (req, res, next) => {
  next();
}, ClientController.MajClient);

//appel des controllers projet
Ind.post('/api/v1/CreeProjet', ProjetController.CreeProjet);
Ind.get('/api/v1/AffProjets', ProjetController.AffProjets);

Ind.get('/api/v1/SupprProjet/:id', (req,res,next) => {
  next();
}, ProjetController.SupprProjet);

Ind.get('/api/v1/AffProjet/:id', (req, res, next) => {
  next();
}, ProjetController.AffProjet);

Ind.put('/api/v1/MajProjet/:id', (req, res, next) => {
  next();
}, ProjetController.MajProjet);

//appel des controllers Salarie
Ind.post('/api/v1/CreeSalarie', SalarieController.CreeSalarie);
Ind.get('/api/v1/AffSalaries', SalarieController.AffSalaries);

Ind.get('/api/v1/SupprSalarie/:id', (req,res,next) => {
  next();
}, SalarieController.SupprSalarie);

Ind.get('/api/v1/AffSalarie/:id', (req, res, next) => {
  next();
}, SalarieController.AffSalarie);

Ind.put('/api/v1/MajSalarie/:id', (req, res, next) => {
  next();
}, SalarieController.MajSalarie);

//lancement du server sur le port 3000
const port = 3000;

Ind.listen(port, () =>
{
  console.log('server on');
})
