const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  completedStatus: {
    type: Number,
    default: false,
  },
});

const Todo = mongoose.model("todo", TodoSchema);

module.exports = Todo;
