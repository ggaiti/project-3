import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});

var User = mongoose.model("User", userSchema);

export default User;
