  
let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/scores", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let scoreSeed = [

{
    username: "John Doe",
    score: 1,
    type: true,
    date: new Date().setDate(new Date().getDate()-10),
},
{
    username: "John Doh",
    score: 2,
    type: true,
    date: new Date().setDate(new Date().getDate()-9),
},
  {
    username: "John Doe",
    score: 3,
    type: false,
    date: new Date().setDate(new Date().getDate()-8),
},
{
    username: "John Doh",
    score: 4,
    type: false,
    date: new Date().setDate(new Date().getDate()-7),
},
{
    username: "Jane Doe",
    score: 5,
    type: true,
    date: new Date().setDate(new Date().getDate()-6),
},
{
    username: "Jane Doh",
    score: 6,
    type: false,
    date: new Date().setDate(new Date().getDate()-5),
},
{
    username: "John Doe",
    score: 7,
    type: true,
    date: new Date().setDate(new Date().getDate()-4),
},
{
    username: "John Doe",
    score: 8,
    type: false,
    date: new Date().setDate(new Date().getDate()-3),
},
{
    username: "Jane Doh",
    score: 11,
    type: false,
    date: new Date().setDate(new Date().getDate()-3),
},
{
    username: "Joe Doe",
    score: 12,
    type: true,
    date: new Date().setDate(new Date().getDate()-2),
},
{
    username: "John Doh",
    score: 13,
    type: false,
    date: new Date().setDate(new Date().getDate()-1),
}
    
  ];
  
  db.Highscore.deleteMany({})
    .then(() => db.Highscore.collection.insertMany(scoreSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });