//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalit�s du module Express.  
var express = require('express'); 
 
// Nous d�finissons ici les param�tres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 

var myRouter = express.Router(); 
var mysql = require('mysql');

var mySqlClient = mysql.createConnection({
	host     : "localhost",
	user     : "root",
	password : "",
	database : "labview"
  });



var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// D�marrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
//Adminusername
myRouter.route('/admin')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET 
//Historique
.get(function(req,res){ 
	var selectQuery = 'SELECT * FROM admin';
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  {
			console.log(results) 
			res.json({resultat : results});
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});

//adminepassword


// Je vous rappelle notre route (/historique).  
myRouter.route('/historiquenom/:num')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET 
//Historique
.get(function(req,res){ 
	var selectQuery = 'SELECT nom FROM historique where num='+ req.params.num;
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  { 
			res.json(results[0].nom);
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});

myRouter.route('/historiqueprenom/:num')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET 
//Historique
.get(function(req,res){ 
	var selectQuery = 'SELECT prenom FROM historique where num='+ req.params.num;
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  {
			res.json(results[0].prenom);
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});

myRouter.route('/historiquedate/:num')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET 
//Historique
.get(function(req,res){ 
	var selectQuery = 'SELECT date FROM historique where num='+ req.params.num;
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  { 
			res.json(results[0].date);
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});

myRouter.route('/historique')
// J'implémente les méthodes GET, PUT, UPDATE et DELETE
// GET 
//Historique
.get(function(req,res){ 
	var selectQuery = 'SELECT * FROM historique';
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  {
			res.json(results.length);
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});

myRouter.route('/inserthistorique')
// make to connection to the database.
.post((req,res)=>{
	mySqlClient.connect(function(err) {
		//if (err) throw err;
		// if connection is successful
		//console.log(NOW())
		var records =[['khaoula','Haddad']
	];
		mySqlClient.query("INSERT INTO historique (nom,prenom) VALUES ?", [records], function (err, result, fields) {
		  // if any error while executing above query, throw error
		  if (error) {
			console.log(error);
			mySqlClient.end();
		  }
		});
	  });
});

//POST Historique
myRouter.route('/identification/:id')
//identification verification
.get(function(req,res){ 
	var selectQuery = 'SELECT password FROM docteur where id='+ req.params.id;
	mySqlClient.query(
	selectQuery,
	function select(error, results, fields) {
		if (error) {
		console.log(error);
		mySqlClient.end();
		return;
		}
		if ( results.length > 0 )  { 
			res.json({resultat : results});
		}
		else{res.json({message : "Erreur", resultat : ''});}
		
})
});
 
// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  

