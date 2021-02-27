const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const highscore = new Schema(
    {
        //these may need a required
      username: {
        type: String,
        trim: true
      },
      score: {
        type: Number
      },
      //type is chaos mode or normal mode to sort where it goes.
      //true will be normal mode
      type: {
          type: Boolean,
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  );
  
  const Highscore = mongoose.model("Highscore", highscore);
  
  module.exports = Highscore;