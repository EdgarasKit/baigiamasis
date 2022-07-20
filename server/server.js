import express from "express";
import Main from "./routes/main.js";
import Answers from "./routes/answers.js";
import Register from "./routes/register.js";
import Login from "./routes/login.js";
import Verify from "./routes/verify.js";
import Users from "./routes/users.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Portas
const PORT = 5000;


//Routes
app.use("/questions", Main);
app.use("/answers", Answers);
app.use("/register", Register);
app.use("/login", Login);
app.use("/verify", Verify);
app.use("/users", Users);


//Serverio paleidimas pradžia
app.listen(PORT, () => console.log(`***Server is runing on ${PORT} PORT`));
