const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  taskName: {
    type: String,
    require: true,
  },
  startDate: {
    type: Date,
    require: true,
  },
  endDate: {
    type: Date,
    require: true,
  },
});

const Todo = new mongoose.model("Todo", userSchema);

module.exports = Todo;
