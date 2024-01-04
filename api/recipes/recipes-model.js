const db = require("../../data/db-config")


async function getRecipeById(recipe_id) {
  const data = await db("recipes")
    .where("recipe_id", recipe_id)
  return data
}



module.exports = {
  getRecipeById
}