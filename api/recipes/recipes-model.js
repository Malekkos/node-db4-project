const db = require("../../data/db-config")


async function getRecipeById(recipe_id) {
  const data = await db("recipes")
  return data
}



module.exports = {
  getRecipeById
}