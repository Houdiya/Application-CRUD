const mysql = require('mysql');
const express= require('express');
const app=express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fatima',
  password: 'passer',
  database: 'BANQUE'
});
//essai
app.get("/Essai", (req, res) => {

res.json({message:'Root page'})
});

app.delete("/Supprimer/:NumCompte", (request, response) => {
const req=request.query;
var NumCompte=req.NumCompte;
const query="DELETE from Compte WHERE NumCompte=?";
console.log(req.NumCompte)
connection.query(query,[NumCompte],(err,result,fields) => {
  if(err){
   response.send('Echec')
   return;
 }
  response.send('Reussi')
});
})

app.listen(8080, function(){
console.log('Votre serveur a demare');
});

