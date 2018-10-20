
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('body').notNullable();
    table.string('priority').notNullable();
    table.string('status').notNullable();
    table.string('createdBy').notNullable();
    table.string('assignedTo').notNullable();
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks');
}