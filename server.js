const express = require("express");

const mongoose = require("mongoose");
const session = require('express-session');




const MongoStore = require('connect-mongo').default;

app.use(session({
  secret: 'foo',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist"})
}));


//maybe a variation of this?

// const sess = {
//    secret: 'Secret Secret',
//    cookie: {},
//    resave: false,
//    saveUninitialized: true,
//    store: new MongoStore({
//       db: sequelize
//    })
// };


//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3005;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(require("./routes/api"));



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
