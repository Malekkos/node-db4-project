const router = require("express").Router()

router.use("*", (req, res, next) => {
  res.json({ message: "Hello! Working good!"})
})


router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    customMessage: "Something wrong inside of the recipes-router",
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router