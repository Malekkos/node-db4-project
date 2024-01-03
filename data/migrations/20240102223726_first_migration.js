/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("recipe_id")
    table.string("recipe_name").notNullable().unique()
    table.dateTime("created_at").notNullable()
  })
  await knex.schema.createTable("ingredients", table => {
    table.increments("ingredient_id")
    table.string("ingredient_name").notNullable().unique()
  })
  await knex.schema.createTable("steps", table => {
    table.increments("step_id")
    table.integer("step_number").notNullable()
    table.string("step_instructions")
    table.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("recipe_id")
      .inTable("recipe_id")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
  })
  await knex.schema.createTable("step_ingredients", table => {
    table.integer("s_i_id")
    table.integer("step_id")
      .unsigned()
      .notNullable()
      .references("step_id")
      .inTable("steps")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
    table.integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("ingredient_id")
      .inTable("ingredients")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT")
    table.string("ingredient_quantity").notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("step_ingredients")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
