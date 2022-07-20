import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const QuestionCard = ({
  questionId,
  loggedIn,
  question,
  deleteFunction,
  deleteAnswerFunction,
  user,
  answers,
  users,
}) => {
  console.log(users);
  console.log(answers);
  const navigate = useNavigate();

  const navigateClick = (id) => {
    navigate(`/answers/${id}`);
  };
  return (
    <>
      <Box>
        <Text>
          Klausima uždavė vartotojas:
          {users && users.find((x) => x.id === question.user_id).username}
        </Text>
        <Text>Klausimas:</Text>
        <TextTwo>{question.question}</TextTwo>
        {loggedIn ? (
          user.id === question.user_id ? (
            <Button
              id={question.id}
              onClick={() => deleteFunction(question.id)}
            >
              Ištrinti klausimą
            </Button>
          ) : (
            <Button onClick={() => navigateClick(questionId)}>Atsakyti</Button>
          )
        ) : null}
        {answers.map((item, index) => (
          <>
            {question.id === Number(item.question_id) ? (
              <>
                <Text key={index}>
                  Atsakė vartotojas:
                  {users && users.find((x) => x.id === item.user_id).username}
                </Text>
                <Text>Atsakymas:</Text>
                <TextTwo>{item.answer}</TextTwo>
                {user.id === Number(item.user_id) ? (
                  <Button onClick={() => deleteAnswerFunction(item.id)}>
                    Ištrinti atsakymą
                  </Button>
                ) : null}
              </>
            ) : null}
          </>
        ))}
      </Box>
    </>
  );
};

export default QuestionCard;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 20px;
  padding: 15px;
  margin: 15px;
  width: 600px;
`;

const Text = styled.span`
  font-size: 10;
  margin: 5px;
`;

const TextTwo = styled.span`
  font-size: 10;
  margin: 5px;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: grey;
  color: white;
  margin: 10px;
  border: none;
`;
