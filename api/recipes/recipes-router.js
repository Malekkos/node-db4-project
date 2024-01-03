const router = require("express").Router()
const Recipe = require("./recipes-model")


router.get("/:recipe_id", (req, res, next) => {
  Recipe.getRecipeById(req.params.recipe_id)
  .then(recipe => {
    res.status(200).json(recipe)
  })
  .catch(error => {
    next(error)
  })
})


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the recipes-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router