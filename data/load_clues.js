/*
Reads the stubs/clues.json to populate the postgres database.
Usage:
  node load_clues.js
 */

var async = require('async'),
    pg = require('pg'),
    util = require('util');

// The json file containing the clues
var jsonData = require("../stubs/clues.json");


/**
 * Saves clue item data to Category (if needed) and Clue table.
 * @param item
 * @param callback
 */
function saveClueItem(item, callback){
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if(err) {
      done();
      console.log(err);
      callback(err, null);
    }
    // Check if category already exists
    client.query(
        'SELECT category_id from category WHERE category_name = ($1);', [item.category],
        function (err, result) {
          var categoryId;
          if (result && result.rows && result.rows[0]) {
            categoryId = result.rows[0]['category_id'];
          }
          client.end();
          if (categoryId) {
            //console.log(util.format("For category %s GOT id %s", item.category, categoryId));
            insertClue(categoryId, item, callback);
          } else {
            pg.connect(process.env.DATABASE_URL, function(err, client, done) {
              if(err) {
                done();
                console.log(err);
                callback(err, null);
              }
              //console.log("Inserting category: " + [item.category]);
              client.query(
                  'INSERT INTO category (category_name) values ($1) RETURNING category_id;',
                  [item.category],
                  function (err, result) {
                    var categoryId = result.rows[0]['category_id'];
                    //console.log(util.format("For category %s INSERTED id %s", item.category, categoryId));
                    client.end();
                    insertClue(categoryId, item, callback);
                  });
            });

          }

        });
  });
}


function insertClue(categoryId, item, callback) {
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    if(err) {
      done();
      console.log(err);
      callback(err, null);
    }
    //console.log("Inserting clue.");
    client.query(
        'INSERT INTO clue (category_id, question, answer) values ($1, $2, $3);',
        [categoryId, item.question, item.answer],
        function (err, result) {
          client.end();
          callback(err);
        });
  });
}

// Insert each item from the json file.
console.log("Inserting clues...");
async.eachSeries(jsonData, function(item, callback) {
  saveClueItem(item, callback);
});


