
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {//make the recipes table
      tbl.increments(); //auto increments primary key
      tbl.text('recipe_name', 255) //make recipe name table with 255 character
        .unique() //needs to be unique
        .notNullable(); // cannot be empty
    })
    .createTable('ingredients', tbl => {// make the ingredients table
      tbl.increments(); //auto increments primary key
      tbl.text('name', 255)//make name field with 255 character limit
        .notNullable(); //cannot be empty
    })
    .createTable('recipe_ingredients', tbl => {//make the recipe ingredients table
      tbl.increments();//auto increments primary key
      tbl.integer('recipe_id')//has recipe id
        .unsigned()// field will never be a negative number
        .notNullable()//must be filled
        .references('recipes.id')//references the if field of the table recipe (1st way to do this)
      tbl.integer('ingredient_id')// has ingredients id
        .unsigned()//field will never be a negative number
        .notNullable() //must be filled
        .references('id')//references the id field
        .inTable('ingredients')// from the table ingredients (2nd longer way to do this)
      tbl.text('quantities', 100)// make the quantity text field with a character limit
        .notNullable()//must be filled
    })
    .createTable('steps', tbl => {
      tbl.increments();//auto increments primary key
      tbl.integer('recipe_id')//has recipe id
        .unsigned()//never will be a negative number
        .notNullable()//must be filled
        .references('id')//references id field
        .inTable('recipes')
      tbl.integer('step_order')// number order of steps
        .unsigned()
        .notNullable()
      tbl.text('step')
      .notNullable()
    })
  
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
