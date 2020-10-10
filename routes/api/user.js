const router = require("express").Router();
const userController = require("../../controllers/userController");

// Get user data after login. Suppose to redirect to the main page with the functional cards, right? Ask team. - Mike Li
router.route("/login/:id")
  .get(userController.findByEmail);

router.route("/create")
  .post(userController.createUser);


// This will be used for the create user page. 
// router.route("/login")
//   .post(userController.createUser);


// Not sure how to use this yet. - Mike Li
// Matches with "/api/login/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove); 

module.exports = router;