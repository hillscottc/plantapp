var Bookshelf = require('../bookshelf-db');

const Plant = Bookshelf.Model.extend({
  tableName: 'plant'
});


module.exports = Plant;

