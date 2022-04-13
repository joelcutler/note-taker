const router = require("express").Router();
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

router.post("/notes", (req, res) => {
    console.log(req.body);
});

module.exports = router;
