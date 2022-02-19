const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://mudasir:Pass123@cluster0.tet8x.mongodb.net/CloudDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const documentSchema = {
  title: String,
  imageName: String,
};

const Document = mongoose.model("Document", documentSchema);

app.get("/getdocs", async (req, res) => {
  const data = await Document.find({});
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "No Documnent published yet" });
  }
});
app.post("/upload/documents", async (req, res) => {
  const { title, imageName } = req.body;
  console.log(title);
  console.log(imageName);
  const newdocument = new Document({
    title,
    imageName,
  });
  const respo = await newdocument.save();
  if (respo) {
    res.status(200).json("added");
  }
});
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
app.listen(4000 || process.env.PORT, function () {
  console.log("Server started on port 4000");
});
