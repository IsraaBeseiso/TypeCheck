const router = require("express").Router();
const Highscore = require("../models/highscores.js");

//can't promise that this is correct yet

router.post("/api/highscore", ({body}, res) => {
    Highscore.create(body)
      .then(dbHighscore => {
        res.json(dbHighscore);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/highscore/bulk", ({body}, res) => {
    Highscore.insertMany(body)
      .then(dbHighscore => {
        res.json(dbHighscore);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/highscore", (req, res) => {
    Highscore.find({}).sort({score: -1})
      .then(dbHighscore => {
        res.json(dbHighscore);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
//personal highscore route

router.get("/api/personalhighscore/:param", (req, res) => {
  Highscore.find({username:param}).sort({date: -1})
    .then(dbPersonalHighscore => {
      res.json(dbPersonalHighscore);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

  module.exports = router;