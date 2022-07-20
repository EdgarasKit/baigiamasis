import React from "react";
import styled from "styled-components";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import AddAnswer from "./pages/AddAnswer";
import Footer from "./components/Footer";
import AddQuestion from "./pages/AddQuestion";
import Header from "./components/Header";

function App() {
  //Visi hooks pradžia
  const [loggedIn, setLoggedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState();

  //Autorizacijos efectas
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    fetch("/verify", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) {
          setLoggedIn(false);
        } else {
          setLoggedIn(true);
          setUser({ username: res.username, id: res.id });
        }
      });
  }, [navigate]);

  //Questions 
  const questionsData = () => {
    fetch("/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  };


  //Answers GET 
  const answersData = () => {
    fetch("/answers")
      .then((res) => res.json())
      .then((data) => setAnswers(data));
  };
 

  const usersData = () => {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    questionsData();
    answersData();
    usersData();
  }, []);

  return (
    <Box>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Home
              questionsData={questionsData}
              answersData={answersData}
              questions={questions}
              answers={answers}
              users={users}
              user={user}
              loggedIn={loggedIn}
            />
          }
        />
        <Route
          path="/answers/:id"
          element={
            <AddAnswer
              answersData={answersData}
            />
          }
        />
        <Route
          path="/addquestion"
          element={<AddQuestion questionsData={questionsData} />}
        />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;


const Box = styled.div`
height: 100%;
`