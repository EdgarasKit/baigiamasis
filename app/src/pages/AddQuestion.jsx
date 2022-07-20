import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Questionform from "../components/Questionform";
import background from "../images/background.jpg"

const AddQuestion = ({ questionsData }) => {
  const navigate = useNavigate();

  //Klausimo POST pradžia
  const addQuestion = (e) => {
    e.preventDefault();
    const question = e.target.elements.question.value;
    fetch(" /questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({
        question: question,
      }),
    })
      .then(() => e.target.reset())
      .then(() => questionsData())
      .then(() => alert("Question added!"))
      .then(() => navigate("/"))
      .then(() => questionsData());
  };

  //Klausimo POST pabaiga

  return (
    <Box>
      <Text>Užduokite klausimą</Text>
      <Questionform addQuestion={addQuestion} />
    </Box>
  );
};

export default AddQuestion;

const Box = styled.div`
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-pozition:center;
  background-repeat: no-repeat;
`;

const Text = styled.h1`
  color: red;
`;
