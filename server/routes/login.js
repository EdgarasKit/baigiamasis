import jwt from "jsonwebtoken";
import axios from "axios";
import express from "express";
import bcrypt from "bcrypt";


const router = express.Router();
router.post("/", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      err: "Įveskite vartotojo vardą ir slaptažodį",
    });
  }
  const all = await axios.get("http://localhost:8080/users");
  const user = all.data.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({
      err: "Toks vartotojas neegzistuoja",
    });
  }
  console.log(user);
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({
      err: "Blogas slaptažodis",
    });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    "betkoks"
  );
  res.json({ token });
});

export default router;
