///////////////////////////////
// Imports
////////////////////////////////
const router = require("express").Router()
const postsController = require("../controllers/posts")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////

//Index:
router.get("/", postsController.index)

//Create:
router.post("/", postsController.create)

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router