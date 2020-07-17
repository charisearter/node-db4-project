
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        //no need for id because auto incremented
        //PB&J
        {recipe_id: 1, ingredient_id: 1, quantities: "2 tbsps"},
        {recipe_id: 1, ingredient_id: 2, quantities: "1 tbsps"},
        {recipe_id: 1, ingredient_id: 3, quantities: "2 slices"},
        //Miso Soba Noodles
        {recipe_id: 2, ingredient_id: 4, quantities: "4 oz"},
        {recipe_id: 2, ingredient_id: 5, quantities: "10 oz"},
        {recipe_id: 2, ingredient_id: 6, quantities: "1"},
        {recipe_id: 2, ingredient_id: 7, quantities: "1"},
        {recipe_id: 2, ingredient_id: 8, quantities: "1"},
        {recipe_id: 2, ingredient_id: 9, quantities: "4 tsp"},
        {recipe_id: 2, ingredient_id: 10, quantities: "2 tbsp"},
        //Carrot Pesto Cavatappi
        {recipe_id: 3, ingredient_id: 11, quantities: "4"},
        {recipe_id: 3, ingredient_id: 12, quantities: "2"},
        {recipe_id: 3, ingredient_id: 13, quantities: "1 box"},
        {recipe_id: 3, ingredient_id: 7, quantities: "1"},
        {recipe_id: 3, ingredient_id: 14, quantities: "1/3 cup"},
        {recipe_id: 3, ingredient_id: 15, quantities: "4 oz"},
        {recipe_id: 3, ingredient_id: 16, quantities: "1/4 cup"},
     
      ]);
    });
};