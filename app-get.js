const mysql = require('mysql');
const express= require('express');
const app=express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fatima',
  password: 'passer',
  database: 'BANQUE'
});
//Lecture de donnees
app.get("/Lire/:NumCompte", (request, response) => {
const req=request.query;
const query="SELECT Solde FROM Compte WHERE NumCompte=?";
const NumCompte=req.NumCompte;
connection.query(query,[NumCompte],(err,result,fields) => {
  if(err){
  	response.send('Veuillez saisir un numero de compte valable');
   	return;
  }
  response.send('Votre solde est:'+result[0].Solde);
});
})

app.listen(8080, function(){
console.log('Votre serveur a demare');
});

