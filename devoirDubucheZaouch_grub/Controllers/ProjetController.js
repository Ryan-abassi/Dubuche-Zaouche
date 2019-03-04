const Projet = require ('../Modules/ProjetModule.js')

exports.CreeProjet = (req,res) => {
  let projet = new Projet
  ({
    nom: req.body.nom,
    debdate: req.body.debdate,
    findate: req.body.findate,
    desc: req.body.desc,
    montant: req.body.montant,
    statut: req.body.statut
  })
  projet.save((err) =>
  {
    if(err){console.log(err);}
    else {console.log('Projet Créer');}
  })
  res.send(projet);
}

exports.SupprProjet = (req, res) => {
  Projet.findByIdAndDelete(req.params.id, (err, projet) => {
    if(err) {
      console.log(err);
    };
    res.send('Projet supprimer');
  });
};

exports.AffProjets = (req, res) => {
  Projet.find((err, projet) => {
    if(err) {
      console.log(err);
    };
    res.send(projet);
  });
};

exports.AffProjet = (req, res) => {
  Projet.findById({_id :req.params.id}, (err, projet) => {
    if(err) {
      console.log(err);
    };
    res.send(projet);
  });
};

exports.MajProjet = (req, res) => {
  Projet.findByIdAndUpdate(req.params.id, req.body, (err, projet) => {
    if (err) {
      console.log(err);
    };
    res.send(projet);
  });
};
