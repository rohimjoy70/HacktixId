const { verifyToken } = require("../helpers/jwt");
const { WatchLists } = require("../models");

const authorization = async (req, res, next) => {
   try {
      const { id } = req.params;
      const watchlist = await WatchLists.findByPk(id);

      if (!watchlist) {
         throw { name: "Not Found" };
      }
      if (watchlist.userId !== req.user.id) {
         throw { name: "Forbidden" };
      }
      next();
   } catch (error) {
      next(error);
   }
};

const authorizationWatchList = async (req, res, next) => {
   try {
      const { user } = req;

      const watchlists = await WatchLists.findAll({ where: { userId: user.id } });

      if (!watchlists || watchlists.length === 0) {
         throw { name: "Not Found" };
      }

      next();
   } catch (error) {
      next(error);
   }
};

module.exports = { authorization, authorizationWatchList };
