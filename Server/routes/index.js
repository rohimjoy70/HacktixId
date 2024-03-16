const express = require("express");
const router = express.Router();
const errorHandler = require("../midlewares/errorHandler");
const Controller = require("../controller/index");
const { auth } = require("../midlewares/auth");
const { authorization,authorizationWatchList } = require("../midlewares/authorization");

//User routes
router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.use(auth);
router.get("/movies", Controller.getAllMovies);
router.post("/watchlist/:movieId", Controller.addFavoriteMovie);
router.get("/watchlists", authorizationWatchList, Controller.getAllWatchLists);
router.patch("/watchlists/:id", authorization, Controller.updateWatchList);

router.use(errorHandler);

module.exports = router;
