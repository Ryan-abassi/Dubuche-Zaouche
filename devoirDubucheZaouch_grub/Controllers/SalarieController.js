const Salarie = require ('../Modules/SalarieModule.js')

exports.CreeSalarie = (req,res) => {
  let salarie = new Salarie
  ({
    nom: req.body.nom,
    prenom: req.body.prenom,
    username: req.body.username,
    anniv: req.body.anniv,
    tel: req.body.tel,
    address: req.body.address,
    mail: req.body.mail,
    poste: req.body.poste
  })
  salarie.save((err) =>
  {
    if(err){console.log(err);}
    else {console.log('Salarie Créer');}
  })
  res.send(salarie);
}

exports.SupprSalarie = (req, res) => {
  Salarie.findByIdAndDelete(req.params.id, (err, salarie) => {
    if(err) {
      console.log(err);
    };
    res.send('Salarie supprimer');
  });
};

exports.AffSalaries = (req, res) => {
  Salarie.find((err, salarie) => {
    if(err) {
      console.log(err);
    };
    res.send(salarie);
  });
};

exports.AffSalarie = (req, res) => {
  Salarie.findById({_id :req.params.id}, (err, salarie) => {
    if(err) {
      console.log(err);
    };
    res.send(salarie);
  });
};

exports.MajSalarie = (req, res) => {
  Salarie.findByIdAndUpdate(req.params.id, req.body, (err, salarie) => {
    if (err) {
      console.log(err);
    };
    res.send(salarie);
  });
};
