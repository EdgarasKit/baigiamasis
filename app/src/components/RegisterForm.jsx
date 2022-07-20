import React from "react";
import styled from "styled-components";
import background from "../images/background.jpg"

const RegisterForm = ({ registeredPerson }) => {
  return (
    <Box className="container">
      <Text>Registracija</Text>
      <Form className="personForm" onSubmit={registeredPerson}>
        <Label>Sugalvokite prisijungimo vardą</Label>
        <Input type="text" name="username" required />
        <Label>Sugalvokite slaptažodį</Label>
        <Input type="password" name="password" required />
        <Input className="submitBtn" type="submit" value="Submit" />
      </Form>
    </Box>
  );
};

export default RegisterForm;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 87vh;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-pozition:center;
  background-repeat: no-repeat;
`;

const Text = styled.h1`
  color: red;
`;

const Form = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label``;

const Input = styled.input`
  margin: 5px;
`;
