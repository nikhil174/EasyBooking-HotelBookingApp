const express = require("express");
const {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
  getHotelRooms,
} = require("../controllers/hotelController.js");
const { getAllRooms } = require("../controllers/roomController.js");
const { verifyAdmin } = require("../utils/verifyToken.js");
const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);
//update
router.put("/:id", verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);
//get
router.get("/find/:id", getHotel);
//get all
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;
