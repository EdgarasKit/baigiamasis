import express from 'express';
import bcrypt from 'bcrypt';
import fetch from 'node-fetch';

const router=express.Router()

router.post('/',async function(req,res){
  const encryptedPass =await bcrypt.hash(req.body.password, 10)
  const users=await 
  fetch(' http://localhost:8080/users',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username:req.body.username,password:encryptedPass})
  })
  res.send(users)
  
})

export default router