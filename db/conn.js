const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/CloudDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("conected"))
  .catch((err) => console.log(err));
