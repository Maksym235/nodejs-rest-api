const express = require("express");
const router = express.Router();
const { validationBody, authenticate, uploads } = require("../../middlewares");
const { joiSchemas } = require("../../models/users");
const {
  register,
  login,
  current,
  logout,
  changeAvatar,
} = require("../../controllers/Users");

router.post("/register", validationBody(joiSchemas.register), register);

router.post("/login", validationBody(joiSchemas.login), login);

router.get("/current", authenticate, current);

router.post("logout", authenticate, logout);

router.patch("/avatars", authenticate, uploads.single("avatar"), changeAvatar);

module.exports = router;
