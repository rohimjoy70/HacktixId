const { User } = require("../models");
const { verifyToken } = require("../helpers/jwt");

const auth = async (req, res, next) => {
   try {
      const { authorization } = req.headers;
      if (!authorization) {
         throw { name: "InvalidToken" };
      }

      const [type, token] = authorization.split(" ");
      if (type !== "Bearer") {
         throw { name: "InvalidToken" };
      }
      const cekToken = verifyToken(token);
      const user = await User.findByPk(cekToken.id);
      if (!user) {
         throw { name: "InvalidToken" };
      }

      req.user = user;

      next();
   } catch (error) {
      next(error);
   }
};

module.exports = { auth };
