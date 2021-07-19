exports.up = function(knex, Promise) {
  return knex.schema.createTable('questionsp', tbl => {
    tbl.increments(); 
    tbl.string('name').notNullable();
    tbl.string('question').notNullable();
    tbl.string('input').notNullable();
    tbl.string('one').notNullable();
    tbl.string('two').notNullable();
    tbl.string('three').notNullable();
    tbl.string('four').notNullable();
    tbl.string('answer').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questionsp');
};