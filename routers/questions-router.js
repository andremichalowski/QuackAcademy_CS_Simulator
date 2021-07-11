const express = require('express') 
//import modal or db here
const questionsRouter = express.Router();


questionsRouter.get("/", (req, res) => {
  Items.getAll()
    .then((questions) => {
      res.json(questions);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get questions" });
    });
});

questionsRouter.get("/:id", (req, res) => {
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

questionsRouter.post("/", (req, res) => {
  const questionData = req.body;

  Items.add(questionData)
    .then((question) => {
      res.status(201).json({ created: question });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new question" });
    });
});

questionsRouter.put("/:id", (req, res) => {
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

questionsRouter.delete("/:id", (req, res) => {
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

// questionsRouter.get("/:id/secondaries", (req, res) => {
//   Questions.getQuestionSecondaries(req.params.id)
//     .then((secondaries) => {
//       res.status(200).json({ data: secondaries });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: err.message });
//     });
// });


module.exports = questionsRouter;