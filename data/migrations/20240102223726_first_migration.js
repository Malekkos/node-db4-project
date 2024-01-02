/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("recipe_id")
    table.string("recipe_name").notNullable().unique()
    table.dateTime("created_at").notNullable()
    table.integer("step_id")
      .unsigned()
      .notNullable()
      .references("step_id")
      .inTable("steps")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
  })
  await knex.schema.createTable("steps", table => {
    table.increments("step_id")
  })
  await knex.schema.createTable("ingredients")
  await knex.schema.createTable()
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists()
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("recipes")
};
