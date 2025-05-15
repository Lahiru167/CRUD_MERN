const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
  },
  age: {
    type: number,
    required: true,
  },
  address: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("UserModel", userSchema);
