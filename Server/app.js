if (process.env.NODE_ENV !== "production") {
   require("dotenv").config();
}
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false })); //parse form url encoded
app.use(express.json()); //parse form json

app.use(cors());

// Routes
app.use(routes);

// app listener
app.listen(port, () => {
   console.log(`Server can be access in http://localhost:${port}`);
});
