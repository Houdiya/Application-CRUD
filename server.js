const mysql = require('mysql');
var express= require('express');
var serveur=express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fatima',
  password: 'passer',
  database: 'BANQUE'
});

serveur.get("/", function(req,resp){
    //resp.setHeader('Content-Type','text/html');
    var requete=req.query
    const quer='insert into Compte SET ? ';
    const params={NumCompte:requete.NumCompte, Solde:requete.Solde}
    connection.query(quer,params,(err,result,fields)=>{
    if (err){
    resp.send('Echec');
     console.log('Echec');
    return;
    }
    console.log('Reussi');
});


})
serveur.listen(8080, function(){
console.log('Votre serveur a demare');
});

