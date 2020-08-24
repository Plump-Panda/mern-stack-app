import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class FoodList extends Component{
    render(){
        return(
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );    
    }
}

// var MongoClient = require('mongodb').MongoClient;
// var assert = require('assert');

// // db url
// var url = 'localhost:3000/food';

// var findDocuments = function(db, callback) {
//   // Get the documents collection
//   var collection = db.collection('pokemons');
//   // Find some documents
//   collection.find({name: 'Dratini'}).toArray(function(err, docs) {
//     assert.equal(err, null);
//     // assert.equal(2, docs.length);
//     console.log("Found the following records");
//     callback(docs);
//   });
// }

// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");
//   findDocuments(db, function(docs) {
//     console.log(docs);
//     exports.getPokemonByName = function() {
//       return docs;
//     }
//     db.close();
//   });
// });