/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable()
  await knex.schema.createTable()
  await knex.schema.createTable()
  await knex.schema.createTable()
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists()
  await knex.schema.dropTableIfExists()
  await knex.schema.dropTableIfExists()
  await knex.schema.dropTableIfExists()
};
