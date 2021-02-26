const router = require("express").Router();

const Highscore = require("../models/highscore.js");

//can't promise that this is correct yet

router.post("/api/highscores", ({body}, res) => {

    Highscore.create(body)
      .then(dbHighscore => {
        res.json(dbHighscore);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/highscores/bulk", ({body}, res) => {

    Highscore.insertMany(body)
      .then(dbHighscore => {
        res.json(dbHighscore);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  


  //get top 10
  router.get("/api/highscores", (req, res) => {
    Highscore.find().then(highscore => {

    //returning the top 10 normal
    const topnorm = highscore.map(i => {
      const {username, score, type} = i
      return {username, score, type}
    })

    //need a line to get rid of ones where type = false

    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    

    //returning the top 10 chaos
    const topchaos = highscore.map(i => {
      const {username, score, type} = i
      return {username, score, type}
    })

    //need a line to get rid of ones where type = true

    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    


    //returning the top 10 personal norm
    const toppersonalnorm = highscore.map(i => {
      const {username, score, type} = i
      return {username, score, type}
    })

    //need a line where it filters to only username = the logged in username and type = false

    .sort((a, b) => b.score - a.score)
    .slice(0, 10)


    //returning the top 10 personal norm
    const toppersonalchaos = highscore.map(i => {
      const {username, score, type} = i
      return {username, score, type}
    })

    //need a line where it filters to only username = the logged in username and type = true

    .sort((a, b) => b.score - a.score)
    .slice(0, 10)



        return res.json(topnorm, topchaos, toppersonalnorm, toppersonalchaos);

      })
    // }
    //   .catch(err => {
    //     res.status(400).json(err);


  });
  
//personal highscore route

router.get("/api/personalhighscores/:param", (req, res) => {
  Highscore.find({username:param}).sort({date: -1})
    .then(dbPersonalHighscore => {
      res.json(dbPersonalHighscore);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

  module.exports = router;