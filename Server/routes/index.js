const express = require("express");
const router = express.Router();
const errorHandler = require("../midlewares/errorHandler");
const Controller = require("../controller/index");
const { auth } = require("../midlewares/auth");
const { authorization } = require("../midlewares/authorization");

//User routes
router.post("/register", Controller.register);
router.post("/login", Controller.login);

router.use(errorHandler);

module.exports = router;