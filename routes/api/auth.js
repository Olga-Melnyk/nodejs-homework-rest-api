const express = require("express");

const usersController = require("../../controllers/auth-controller");

const schemas = require("../../schemas/users-schemas");

const { validateBody, authenticate, upload } = require("../../decorators");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  usersController.register
);

router.get("/verify/:verificationToken", usersController.verify);

router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  usersController.resendVerifyEmail
);

router.post("/login", validateBody(schemas.loginSchema), usersController.login);

router.get("/current", authenticate, usersController.getCurrent);

router.post("/logout", authenticate, usersController.logout);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersController.updateAvatar
);

module.exports = router;
