const router = require("express").Router();
const { notes } = require("../../db/db");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
//   res.json(notes);
//   res.status(200).send("The notes were retrieved.");
res.status(200).json(notes);
});

router.post("/notes", (req, res) => {
  const note = req.body;
  notes.push({ ...note, id: uuidv4() });
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  res.status(200).send("The note was posted.");
});

router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  console.log("here's the console log", id);
  notes.splice([id], 1);
  fs.writeFileSync(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  res.status(200).send("The note was BAleted & yeeted.");
});

module.exports = router;
