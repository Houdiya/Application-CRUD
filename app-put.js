const mysql = require('mysql');
const express= require('express');
const app=express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'fatima',
  password: 'passer',
  database: 'BANQUE'
});

//Update
app.put("/Solder/:NumCompte1/:NumCompte2/:Soldet", (request, response) => {
const req=request.query;
const NumCompte1=req.NumCompte1
const NumCompte2=req.NumCompte2
const Soldet=req.Soldet
const query="SELECT * FROM Compte WHERE Numcompte=? "; 
const query1="UPDATE Compte SET Solde=Solde-? WHERE Solde-?>=0  AND Numcompte=?";
const query2="UPDATE Compte SET Solde=Solde+? WHERE Numcompte=?";
connection.query(query,[NumCompte1],(err,result,fields) => { 
if(!err){
	connection.query(query1,[Soldet,Soldet,NumCompte1],(err1,result,fields) => {
	if(!err1){
       		connection.query(query2,[Soldet,NumCompte2],(err2,result,fields) => {
		if(!err2){
			response.send('Reussi')
		}
		else{
			response.send('Saisissez un numero de compte valable')
		}
		});
	}
	else{
	response.send('Solde Insuffisant')
	}
	});
}
else{
  response.send('Erreur')
}
});
})
app.listen(8080, function(){
console.log('Votre serveur a demare');
});

