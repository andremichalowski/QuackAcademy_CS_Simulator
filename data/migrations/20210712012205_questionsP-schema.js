exports.up = function(knex, Promise) {
  return knex.schema.createTable('questionsp', tbl => {
    tbl.increments(); 
    tbl.string('Name').notNullable();
    tbl.string('Question').notNullable();
    tbl.string('Input').notNullable();
    tbl.string('Option 1').notNullable();
    tbl.string('Option 2').notNullable();
    tbl.string('Option 3').notNullable();
    tbl.string('Option 4').notNullable();
    tbl.string('Answer').notNullable();
    

		// tbl.foreign('user_id').references('Items.user_id_in_items')
		// 	.onUpdate('CASCADE')
		// 	.onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('questionsp');
};

