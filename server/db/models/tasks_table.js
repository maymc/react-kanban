const bookshelf = require('./bookshelf.js')

const Tasks = bookshelf.Model.extend({
  tableName: 'tasks',
  idAttribute: 'id'
})



//can now use JS to touch the Tasks db
module.exports = Tasks