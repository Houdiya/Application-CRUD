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

//insert query example
app.get("/Creer/:NumCompte/:Solde", (request, response) => {
const req=request.query;
console.log(req)
const query="INSERT INTO Compte SET ?";
const params={NumCompte:req.NumCompte,Solde:req.Solde}
connection.query(query,params,(err,result,fields) => {
  if(err){

   response.send('Echec')
   console.log('Echec')
   return;
 }
  response.send('Reussi')
  console.log('Reussi')

});
})

app.listen(3000, function(){
console.log('Votre serveur a demare');
});

