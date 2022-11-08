const mongoose = require("mongoose");
const books_schema = new mongoose.Schema({
  author_name: {
    type: String,
    require: true,
  },
  book_title: {
    type: String,
    require: true,
  },
  isbn: String,
  edition: String,
  book_type: String,
});
const Books_data = new mongoose.model("Books_data", books_schema);
module.exports = Books_data;
