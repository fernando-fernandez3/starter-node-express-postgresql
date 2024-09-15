const products = require('../fixtures/products');

exports.seed = async function(knex) {
  await knex('products').del();
  await knex('products').insert(products);
};
