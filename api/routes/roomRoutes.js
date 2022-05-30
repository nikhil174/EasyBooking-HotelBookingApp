const express = require("express");
const {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} = require("../controllers/roomController.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

//create
router.post("/:hotelId", verifyAdmin, createRoom);
//update
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);
//delete
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);
//get
router.get("/:id", getRoom);
//get all
router.get("/", getAllRooms);

module.exports = router;
