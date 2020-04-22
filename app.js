const app = require('express')();
const http = require('http').Server(app);
console.log(3);
// On utilise la lib npm pg pour intéragir avec la DB postgres.
// (npm i pg)
const pg = require('pg');
// Nouveau client
const connectionString = process.env.POSTGRES_HOST;
const client = new pg.Client(connectionString);
// On se connecte au client
client.connect(err => {
    if (err) {
        console.error('connection error !!!!', err.stack)
    } else {
        console.log('connected')
    }
})

// Demo d'une requête simple:
// Créer une table
// /!\ Erreur si la table existe déjà mais osef
client.query('CREATE TABLE models(id SERIAL PRIMARY KEY, module VARCHAR(45) not null, name VARCHAR (255))');

// Ajouter un élément dans la table
const text = 'INSERT INTO models(module, name) VALUES($1, $2) RETURNING *';
const values = ['Linear Regression', 'linear_models'];

// Executer la requête et observer les résultat
client.query(text, values, (err, res) => {
    if (err) {
        console.log(err.stack)
    } else {
        console.log(res.rows)
    }
});

module.exports = http;