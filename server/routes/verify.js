import express from 'express';
import isAuthed from '../isAuthed.js';

const router=express.Router()

router.get('/', isAuthed, async function(req, res){
  res.send({username: req.token.username,id: req.token.id})
 });








export default router