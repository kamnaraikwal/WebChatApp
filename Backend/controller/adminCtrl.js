const userModel = require("../models/userModels");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({ isAdmin: { $ne: true } });
    res.status(200).send({
      success: true,
      message: `users fetched`,
      data: users,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: `Error in getAllUsersController`,
    });
  }
};

const BlockUserController = async (req, res) => {
  try {
    const userId = req.body.blockUserId;

    const user = await userModel.findById(userId);
    user.isBlocked = true;
    await user.save();
    res.status(200).send({
      success: true,
      message: `User blocked successfully`,
    });
  } catch (error) {
    console.log(`error in BlockUserController `);
    res.status(504).send({
      success: false,
      error,
      message: `error in BlockUserController`,
    });
  }
};

const UnblockUserController = async (req, res) => {
  try {
    const userId = req.body.unblockUserId;

    const user = await userModel.findById(userId);
    user.isBlocked = false;
    await user.save();

    res.status(200).send({
      success: true,
      message: `User unblocked successfully`,
    });
  } catch (error) {
    console.log(`error in UnblockUserController `);
    res.status(504).send({
      success: false,
      error,
      message: `error in UnblockUserController`,
    });
  }
};
module.exports = {
  getAllUsersController,
  BlockUserController,
  UnblockUserController,
};
