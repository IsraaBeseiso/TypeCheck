const router = require("express").Router();
const Highscore = require("../models/highscore.js");
const User = require("../models/userModel.js") 
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');
 


///api/highscore?

router.post("/api/highscores", ({body}, res) => {
    Highscore.create({
      //needs session setup
      username: req.session.username,
      //username: "placeholder" if testing before session?
      score: req.body.score,
      type: req.body.type

    })
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
    const topnorm = highscore.filter(i=> {
      //filters for norms
      return i.type === true;})
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(i => {
      const {username, score, type} = i
      return {username, score, type}


    })


    

    //returning the top 10 chaos
    const topchaos = highscore.filter(i=> {
      //filters for chaos
      return i.type === false;})
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(i => {
      const {username, score, type} = i
      return {username, score, type}

    })

    //need a line to get rid of ones where type = true


    


    //returning the top 10 personal norm
    const toppersonalnorm = highscore.filter(i=> {
      return i.type === true;
      

    //this may filter by username
    //.filter(i=> {
      //return i.username === session.username;
      //})
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(i => {
      const {username, score, type} = i
      return {username, score, type}



    })

    //need a line where it filters to only username = the logged in username


    //returning the top 10 personal norm
    const toppersonalchaos = highscore.filter(i=> {
      //filters for chaos
      return i.type === false;})
      
      //this may filter by username
      //.filter(i=> {
      //return i.username === session.username;
      //})
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map(i => {
      const {username, score, type} = i
      return {username, score, type}


    })


    //where highscore.username = session.username





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


router.post("/api/newUser", ({body}, res) => {
  if (body.username && body.email && body.password){
    User.find({email : body.email}).then (data => {
      console.log(data)
      if (data)// fix truthy statement , find a way to compare data to body.email
      {return (res.status (400).json({error:"Email is already taken"}))
    } else{

    } 
     
    })
    var password = cryptr.encrypt(body.password)
    User.create({username:body.username, password:password, email: body.email})
    .then(dbHighscore => {

      //Saving the username as a session for the highscores
        req.session.save(() => {
        req.session.username = dbHighscore.username;
        req.session.loggedIn = true;
      res.json(dbHighscore);
               })
    })
    .catch(err => {
      res.status(400).json(err);
    }); 
  } else (res.status (400).json({error:"Must have username, email and password"}))
});

router.get ("/api/getUser", (req, res) =>{
  console.log("hello")
User.find ({}).then(data => res.json(data)) 
})
  module.exports = router;