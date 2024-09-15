const suppliers = require('../fixtures/suppliers');

exports.seed = async function(knex) {
  await knex('suppliers').del();

  await knex('suppliers').insert(suppliers);
};
