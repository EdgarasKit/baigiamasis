import express from 'express';
import fetch from 'node-fetch';
const router = express.Router()
//Visu vartotoju atsakymu gavimas
router.get('/', async function (req, res) {
  const users = await fetch('http://localhost:8080/users').then(data => data.json())
  res.json(users)
});

export default router
