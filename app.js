const express = require("express");
const Books_data = require("./src/model/books_data");
require("./src/conn/conn");
const port = process.env.PORT || 3000;
const app = express();
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", async (req, res) => {
  try {
    const library_data = new Books_data({
      author_name: req.body.author_name,
      book_title: req.body.book_title,
      isbn: req.body.isbn,
      edition: req.body.edition,
      book_type: req.body.book_type,
    });
    const books_saved = await library_data.save();
    res.status(201).render("all_Books");
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/books", async (req, res) => {
  try {
    const books_stored_data = await Books_data.find({});
    res.render("all_Books", {
      data: {
        author_name: books_stored_data[0].author_name,
        book_title: books_stored_data[0].book_title,
        edition: books_stored_data[0].edition,
        isbn: books_stored_data[0].isbn,
      },
      data_two: {
        author_name: books_stored_data[1].author_name,
        book_title: books_stored_data[1].book_title,
        edition: books_stored_data[1].edition,
        isbn: books_stored_data[1].isbn,
      },
      data_three: {
        author_name: books_stored_data[2].author_name,
        book_title: books_stored_data[2].book_title,
        edition: books_stored_data[2].edition,
        isbn: books_stored_data[2].isbn,
      },
    });
    console.log(books_stored_data);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, (req, res) => {
  console.log(`Port is on ${port}`);
});
