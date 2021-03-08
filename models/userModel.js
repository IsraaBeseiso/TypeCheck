const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


//not quite sure where to put the password compare 
///I think 2 encrypted passwords are compared
//    checkPassword(dbpass) {
//   return bcrypt.compareSync(dbpass, this.password)
// };


const UserSchema = new Schema(

  {



  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
},
  {
  hooks: {
    //might need to change newuserdata var name? or it can be w/e
    async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
    },

    async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
    },
    //async?
       checkPassword(dbpass) {
  return bcrypt.compareSync(dbpass, this.password)
}
  },
});



 const User = mongoose.model("User", UserSchema);




module.exports = User;