const express = require("express");

const usersController = require("../../controllers/auth-controller");

const schemas = require("../../schemas/users-schemas");

const { validateBody, authenticate } = require("../../decorators");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  usersController.register
);

router.post("/login", validateBody(schemas.loginSchema), usersController.login);

router.get("/current", authenticate, usersController.getCurrent);

router.post("/logout", authenticate, usersController.logout);

module.exports = router;
