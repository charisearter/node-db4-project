
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //no need for id because auto incremented
        //PB&J
        {recipe_id: 1, step_order: 1, step: ""},
       
        //Miso Soba Noodles
        {recipe_id: 2, step_order: 1, step: ""},

        //Carrot Pesto Cavatappi
        {recipe_id: 3, step_order: 1, 
          step: "Preheat the oven to 425F. Bring a large pot of salted water to a boil. Peel and thinly slice the carrots. Peel the garlic."},
        {recipe_id: 3, step_order: 2, 
          step: "Place the sliced carrots on a baking sheet and toss the 1 tsp olive oil and a pinch of salt and pepper. Roast until lightly browned and fork-tender, 10 to 12 minutes."},
        {recipe_id: 3, step_order: 3, 
          step: "Add cavatappi to the boiling water and stir. Reduce heat and cook until aldente, 6 to 8 minutes."},
        {recipe_id: 3, step_order: 4, 
          step: ""},
        {recipe_id: 3, step_order: 5, 
          step: ""},
        {recipe_id: 3, step_order: 6, 
          step: ""},
        {recipe_id: 3, step_order: 7, 
          step: ""},

     
      ]);
    });
};