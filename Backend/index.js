
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;
const cors = require('cors');
// const app = express();

app.use(cors());

const mongoDBURL = "mongodb+srv://Anku:Brahman_45@cluster0.krbzesh.mongodb.net/sckillforms?retryWrites=true&w=majority";


mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());


const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  skill: String,
  age: String,
});


const User = mongoose.model("User", userSchema);


app.post("/register", async (req, res) => {
  try {
    const { name, gender, skill, age } = req.body;

    const newUser = new User({ name, gender, skill, age });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
