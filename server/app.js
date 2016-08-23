var express = require('express');
var app = express();
var path=require('path');
var bodyParser=require('body-parser');
var pt = require('periodic-table');
var urlencodedParser=bodyParser.urlencoded( { extended: false } );
var pg=require('pg');
// postgres must be running and you must have this db name correct
var connectionString = 'postgres://localhost:5432/tasklist';
// static public folder
app.use( express.static( 'public' ) );

// base url
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// single elements by name
var he = pt.elements.Helium;
console.log(he, "he");

//spin up server
app.listen( 8080, 'localhost', function( req, res ){
  console.log( 'listening on 8080' );
});
