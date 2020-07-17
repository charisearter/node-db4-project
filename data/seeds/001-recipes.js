
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        //no need for id because auto incremented
        {recipe_name: 'PB & J'},
        {recipe_name: 'Miso Soba Noodles'},
        {recipe_name: 'Carrot Pesto Cavatappi'}
     
      ]);
    });
};
