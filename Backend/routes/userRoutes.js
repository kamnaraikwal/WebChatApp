const express = require("express");
const router = express.Router();

const {
  loginController,
  registerController,
  authController,
  OTPController,
  verifyOTPController,
  getAllNotificationController,
  deleteAllNotificationController,
  changePasswordController,
} = require("../controller/userCtrl");
const { authMiddleware } = require("../middlewares/AuthMiddleware");

router.post("/login", loginController);
router.post("/sendOTP", OTPController);
router.post("/verifyOTP", verifyOTPController);
router.post("/register", registerController);
router.post("/changePassword", changePasswordController);
router.post("/getUserData", authMiddleware, authController);
//notification || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

module.exports = router;
