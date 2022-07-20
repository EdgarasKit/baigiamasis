import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const registerPerson = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    console.log(username, password);
    fetch(" /register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(() => e.target.reset())
      .then(() => alert("Registered"))
      .then(() => navigate("/login"));
  };
  return (
    <>
      <RegisterForm registeredPerson={registerPerson} />
    </>
  );
};

export default Register;
