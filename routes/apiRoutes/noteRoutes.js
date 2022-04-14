const router = require("express").Router();
const { notes } = require("../../db/db");
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
  res.json(notes);
  res.status(200).send("The notes were retrieved.");
});

router.post("/notes", (req, res) => {
  res.status(200).send("The note was posted.");
  const note = req.body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
});

router.delete("/notes/:id", (req, res) => {
  res.status(200).send("The note was BAleted & yeeted.");
  const id = req.params.id;
  console.log("here's the console log", id);
  notes.splice([id], 1);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
});

module.exports = router;
