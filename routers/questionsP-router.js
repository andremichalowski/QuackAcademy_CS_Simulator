const express = require('express');
const Items = require('../models/questionsP-model.js');
const questionsProuter = express.Router();


questionsProuter.get("/", (req, res) => {
  console.log(questionsProuter, 'Somethings wrong before .then')

  Items.getAll()
    .then((questions) => {
      res.json(questions);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get questions" });
    });
});

questionsProuter.get("/:id", (req, res) => {
  const { id } = req.params;

  Items.getById(id)
    .then((question) => {
      if (question) {
        res.json(question);
      } else {
        res.status(404).json({ message: "Could not find question with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get question" });
    });
});

questionsProuter.post("/", (req, res) => {
  const questionData = req.body;

  Items.add(questionData)
    .then((question) => {
      res.status(201).json({ created: question });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new question" });
    });
});

questionsProuter.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Questions.update(id, changes)
    .then((question) => {
      if (question) {
        res.json({ updated: question });
      } else {
        res.status(404).json({ message: "Could not find question with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update question" });
    });
});

questionsProuter.delete("/:id", (req, res) => {
  const { id } = req.params;

  Questions.remove(id)
    .then((question) => {
      if (question) {
        res.json({ removed: question });
      } else {
        res.status(404).json({ message: "Could not find question with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete question" });
    });
});

// questionsProuter.get("/:id/secondaries", (req, res) => {
//   Questions.getQuestionSecondaries(req.params.id)
//     .then((secondaries) => {
//       res.status(200).json({ data: secondaries });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });


module.exports = questionsProuter;