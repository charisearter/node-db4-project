exports.seed = function(knex) {
  // Deletes ALL existing entries
  //truncate resets primary key each time (instead of del)
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        //no need for id because auto incremented
        {name: 'peanut butter'},
        {name: 'jelly'},
        {name: 'bread'},
        {name: 'soba noodles'},
        {name: 'firm tofu'},
        {name: 'zucchini'},
        {name: 'lemon'},
        {name: 'scallion'},
        {name: 'Dijon mustard'},
        {name: 'white miso paste'},
        {name: 'carrot(s)'},
        {name: 'garlic clove(s)'},
        {name: 'cavatappi'},
        {name: 'sliced almonds'},
        {name: 'baby arugula'},
        {name: 'parmesan'}
     
      ]);
    });
};