const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const {
  getAllUsersController,
  BlockUserController,
  UnblockUserController,
} = require("../controller/adminCtrl");

router.post("/get-all-users", authMiddleware, getAllUsersController);

router.post("/blockUser", authMiddleware, BlockUserController);

router.post("/unblockUser", authMiddleware, UnblockUserController);
module.exports = router;
