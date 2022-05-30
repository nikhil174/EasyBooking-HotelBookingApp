const userModal = require("../model/userModal.js");
const { createError } = require("../utils/error.js");

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await UserModal.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await userModal.findByIdAndDelete(req.params.id);
    res.status(200).json("user is deleted");
  } catch (err) {
    next(err);
  }
};
const getUser = async (req, res, next) => {
  try {
    const User = await userModal.findById(req.params.id);
    res.status(200).json(User);
  } catch (err) {
    next(err);
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const user = await userModal.find();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { updateUser, deleteUser, getAllUsers, getUser };
