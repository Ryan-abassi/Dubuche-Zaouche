const Client = require ('../Modules/ClientModule.js')

exports.CreeClient = (req,res) => {
  let client = new Client
  ({
    nom: req.body.nom,
    address: req.body.address,
    contact: req.body.contact,
    secteur: req.body.secteur
  })
  client.save((err) =>
  {
    if(err){console.log(err);}
    else {console.log('Client Créer');}
  })
  res.send(client);
}

exports.SupprClient = (req, res) => {
  Client.findByIdAndDelete(req.params.id, (err, client) => {
    if(err) {
      console.log(err);
    };
    res.send('Client supprimer');
  });
};

exports.AffClients = (req, res) => {
  Client.find((err, client) => {
    if(err) {
      console.log(err);
    };
    res.send(client);
  });
};

exports.AffClient = (req, res) => {
  Client.findById({_id :req.params.id}, (err, client) => {
    if(err) {
      console.log(err);
    };
    res.send(client);
  });
};

exports.MajClient = (req, res) => {
  Client.findByIdAndUpdate(req.params.id, req.body, (err, client) => {
    if (err) {
      console.log(err);
    };
    res.send(client);
  });
};
