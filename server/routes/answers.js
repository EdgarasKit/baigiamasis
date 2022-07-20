import express from 'express';
import fetch from 'node-fetch';
import isAuthed from '../isAuthed.js'
const router = express.Router()

//Visu atsakymu gavimas
router.get('/', async function (req, res) {
  const answers = await fetch('http://localhost:8080/answers').then(data => data.json())
  res.json(answers)
});

//Atsakymu DELETE
router.delete('/delete/:id', isAuthed, async function (req, res) {
  const deleteanswer = await fetch(`http://localhost:8080/answers/${req.params.id}`, {
    method: "DELETE"

  })
  res.send("Ištrinta")
})

//Atsakymu POST
router.post('/', isAuthed, async function (req, res) {
  const addanswers = await
    fetch(' http://localhost:8080/answers', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: req.token.id,
        question_id: req.body.question_id,
        answer: req.body.answer
      })
    })
  res.send(addanswers)
});

//Atsakymu gavimas pagal klausimo id
router.get('/:question_id', async function (req, res) {
  const answers = await fetch(`http://localhost:8080/answers/${req.params.question_id}`).then(data => data.json())
  res.json(answers)
});


export default router