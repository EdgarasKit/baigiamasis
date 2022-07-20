import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import background from "../images/background.jpg"

const AddAnswer = ({ answersData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  //Atsakymu POST
  const addAnswer = (e) => {
    e.preventDefault();
    const answer = e.target.elements.answer.value;
    fetch(" /answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify({
        question_id: id,
        answer: answer,
      }),
    })
      .then(() => e.target.reset())
      .then(() => alert("Answer added!"))
      .then(() => answersData())
      .then(() => navigate("/"));
  };
  //Atsakymu POST

  return (
    <Box>
      <Text>Įveskite komentarą</Text>
      <Form onSubmit={addAnswer}>
        <TextArea
          type="text"
          name="answer"
          id=""
          cols="70"
          rows="20"
          required
        ></TextArea>
        <Input className="answerBtn" type="submit" value="Komentuoti" />
      </Form>
    </Box>
  );
};

export default AddAnswer;

const Box = styled.div`
  display: flex;
  height: 87vh;
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
const Form = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
`;
const TextArea = styled.textarea``;

const Input = styled.input`
  margin: 5px;
`;
