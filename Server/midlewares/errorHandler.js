const errorHandler = (error, req, res, next) => {
   switch (error.name) {
      case "InvalidToken":
      case "JsonWebTokenError":
         res.status(401).json({ message: "Invalid Token. Please login first" });
         break;
      case "SequelizeValidationError":
      case "SequelizeUniqueConstraintError":
         res.status(400).json({ message: error.errors[0].message });
         break;
      case "EmailRequired":
         res.status(400).json({ message: "Email cannot required" });
         break;
      case "PasswordRequired":
         res.status(400).json({ message: "Password cannot required" });
         break;
      case "Unauthorized":
         res.status(401).json({ message: "Invalid email/password" });
         break;
      case "Not Found":
         res.status(404).json({ message: "Movie not found" });
      case "BadRequest":
         res.status(404).json({ message: "Movie already exists in watchlist" });
      case "Forbidden":
         return res.status(403).json({ message: "You are not authorized" });
      default:
         console.log(error);
         res.status(500).json({ message: "Internal server error" });
         break;
   }
};

module.exports = errorHandler;
