var Bookshelf = require('../bookshelf-db');


Bookshelf.plugin('pagination');


const Plant = Bookshelf.Model.extend({
  tableName: 'plant'
});


module.exports = Plant;

