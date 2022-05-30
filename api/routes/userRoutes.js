const express = require("express");
const {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} = require("../controllers/userController.js");
const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken.js");
const router = express.Router();

// router.get("/checkauth", verifyToken, (req, res, next) => {
//   res.send("hello user, You are logged in!");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, You are logged in and you can delete your account");
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, You are logged in and you can delete all account");
// });

//update
router.put("/:id", verifyUser, updateUser);
//delete
router.delete("/:id", verifyUser, deleteUser);
//get
router.get("/:id", verifyUser, getUser);
//get all
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
