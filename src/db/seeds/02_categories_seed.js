const categories = require('../fixtures/categories');

exports.seed = async function(knex) {
  await knex('categories').del();
  await knex('categories').insert(categories);
};
