const express = require("express");

const usersController = require("../../controllers/auth-controller");

const schemas = require("../../schemas/users-schemas");

const { validateBody } = require("../../decorators");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  usersController.register
);

router.post("/login", validateBody(schemas.loginSchema), usersController.login);

module.exports = router;
