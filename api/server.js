const express = require('express');
const helmet = require("helmet");

const recipeRouter = require('./recipes/recipes-router.js');

const db = require("../data/connection.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get("/api/recipes", (req, res) => {
  db("recipes")
      .then(recipes => {
          res.status(200).json({ data: recipes });
      })
      .catch(error => {
          res.status(500).json({ 
            messge: 'There was an error getting the recipes', 
            error: error.message });
      });
});


module.exports = server;