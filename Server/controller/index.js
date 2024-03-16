const { comparePass } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User, WatchLists, Movies } = require("../models");

class AllController {
   static async register(req, res, next) {
      try {
         const { id, email } = req.body;
         const user = await User.create(req.body);
         res.status(201).json({ id, email });
      } catch (error) {
         next(error);
      }
   }

   static async login(req, res, next) {
      try {
         const { email, password } = req.body;
         if (!email) {
            throw { name: "EmailRequired" };
         }
         if (!password) {
            throw { name: "PasswordRequired" };
         }

         const user = await User.findOne({ where: { email } });
         if (!user) {
            throw { name: "Unauthorized" };
         }

         const comparedPassword = comparePass(password, user.password);

         if (!comparedPassword) {
            throw { name: "Unauthorized" };
         }
         const access_token = signToken({ id: user.id });

         res.status(200).json({ message: "succes login ", access_token });
      } catch (error) {
         next(error);
      }
   }
   static async getAllMovies(req, res, next) {
      try {
         const movies = await Movies.findAll();
         res.status(200).json(movies);
      } catch (error) {
         next(error);
      }
   }

   static async addFavoriteMovie(req, res, next) {
      try {
         const userId = req.user.id;
         const { movieId } = req.params;
         const movie = await Movies.findByPk(movieId);
         if (!movie) {
            throw { name: "Not Found" };
         }

         const existingWatchList = await WatchLists.findOne({ where: { userId, movieId } });
         if (existingWatchList) {
            throw { name: "BadRequest" };
         }

         await WatchLists.create({ userId, movieId });

         res.status(201).json({ message: "Movie added to watchlist successfully" });
      } catch (error) {
         next(error);
      }
   }

   static async getAllWatchLists(req, res, next) {
      try {
         const userId = req.user.id;

         const watchLists = await WatchLists.findAll({ where: { userId } });

         res.status(200).json(watchLists);
      } catch (error) {
         next(error);
      }
   }

   static async updateWatchList(req, res, next) {
      try {
         const userId = req.user.id;
         const { id } = req.params;
         const watchList = await WatchLists.findByPk(id);
         const [updatedRows] = await WatchLists.update({ status: "watched" }, { where: { id, status: "not watched" }, returning: true });

         if (updatedRows === 0) {
            throw { name: "Not Found", message: "Movie not found or already watched" };
         }

         res.status(200).json({ message: "Watchlist updated successfully" });
      } catch (error) {
         next(error);
      }
   }
}

module.exports = AllController;
