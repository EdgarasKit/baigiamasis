import React from "react";
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginPerson = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.elements.username.value,
        password: e.target.elements.password.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.err) return alert(res.err);
        if (res.token) {
          localStorage.setItem("Token", res.token);
          alert("Sėkmingai prisijungėte");
          navigate("/");
        }
      });
  };
  return (
    <>
      <LoginForm loginPerson={loginPerson} />
    </>
  );
};

export default Login;

