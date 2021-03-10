const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const db = require("./config");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
// const expressSession = require("express-session");
// const MongoStore = require("connect-mongo")(expressSession);
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);


require("dotenv").config();
const PORT = process.env.PORT || 3002;
// MW
const app = express();
// app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());
// DB => API
// db().then((connection) => {
//   app.use(
//     expressSession({
//       secret: process.env.SECRET,
//       resave: true,
//       saveUninitialized: true,
//       cookie: { secure: true },
//       store: new MongoStore({ mongooseConnection: connection }),
//     })
//   );
// });
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use (require ("./routes/api"))
// const publicPath = path.join(__dirname, './client/public');
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});