
exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //no need for id because auto incremented
        //PB&J
        {recipe_id: 1, step_order: 1, step: "...Are you serious?"},
        {recipe_id: 1, step_order: 2, step: "Take 2 slices of bread, spread peanut butter on one slice on one side, spread jelly on one side of the other slice. Put the peanut butter and jelly sides together."},
       
        //Miso Soba Noodles
        {recipe_id: 2, step_order: 1, 
          step: "Bring a medium saucepan of salted water to a boil. Add soba noodles, gently stir, and cook until al dente, 2 to 3 minutes. Drain noodles and run under cold water to stop the cooking process, and return to the saucepan off heat."},
        {recipe_id: 2, step_order: 2, 
            step: "Dice the tofu into ½ inch cubes. Slice zucchini into half moons. Zest and juice the lemon. Slice the scallion. Heat 1 tbsp olive oil in a large nonstick skillet over medium-high heat. Add diced tofu, sliced zucchini, a pinch of salt, and 1 tsp pepper. Cook until lightly browned, 5 to 7 minutes. Add lemon zest, toss, and remove skillet from heat."},
        {recipe_id: 2, step_order: 3, 
              step: "Add the lemon juice, Dijon mustard, and white miso paste to a small bowl and stir. Add miso sauce to the cooked soba noodles and toss. Divide the miso soba noodles between bowls and top with lemon pepper tofu and zucchini. Sprinkle with sliced scallion."},

        //Carrot Pesto Cavatappi
        {recipe_id: 3, step_order: 1, 
          step: "Preheat the oven to 425F. Bring a large pot of salted water to a boil. Peel and thinly slice the carrots. Peel the garlic."},
        {recipe_id: 3, step_order: 2, 
          step: "Place the sliced carrots on a baking sheet and toss the 1 tsp olive oil and a pinch of salt and pepper. Roast until lightly browned and fork-tender, 10 to 12 minutes."},
        {recipe_id: 3, step_order: 3, 
          step: "Add cavatappi to the boiling water and stir. Reduce heat and cook until al dente, 6 to 8 minutes. Reserve 3/4 cup pasta water, and drain pasta."},
        {recipe_id: 3, step_order: 4, 
          step: "Save the pot because we will use it again soon."},
        {recipe_id: 3, step_order: 5, 
          step: "Halve and juice the lemon. Add roasted carrots, peeled garlic, almonds, just 1/2 cup baby arugula, just half of the parmesan, just half of the lemon juice, 1/4 tsp salt, and the reserved pasta water to a food processor (or blender). Pulse until combined. With the food processor on high speed, slowly add 2tbsp olive oil, scrapping down the sides as necessary, until well combined. Taste the carrot pesto, add salt as necessary"},
        {recipe_id: 3, step_order: 6, 
          step: "Add the carrot pesto, cooked cavatappi, remaining lemon juice, and the remaining baby arugula to the large part over low heat. Cook until arugula is slightly wilted, 1 to 2 minutes. Taste, and add salt and pepper as necessary."},
        {recipe_id: 3, step_order: 7, 
          step: "Divide the carrot pesto cavatappi with lemon arugula between large bowls and sprinkle the remaining parmesan. ENJOY!"},
      ]);
    });
};