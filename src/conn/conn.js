const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/library_system", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("successfully connected!"))
  .catch((err) => console.log(err));
