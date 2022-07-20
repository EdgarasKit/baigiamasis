import styled from "styled-components";
import QuestionCard from "../components/QuestionCard";
import background from "../images/background.jpg"

const Home = ({ questions, answers, users, user, loggedIn, questionsData, answersData }) => {
  //Klausimu DELETE
  const deleteFunction = (question_id) => {
    fetch(`/questions/delete/${question_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then(() => questionsData())
      .then(() => alert("Ištrinta"));
  };
  //Klausimu DELETE

  //Atsakymu DELETE
  const deleteAnswerFunction = (answer_id) => {
    console.log(answer_id);
    fetch(`/answers/delete/${answer_id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then(() => answersData())
      .then(() => alert("Ištrinta"));
  };
  //Atsakymu DELETE

  return (
    <>
      <Box>
        <Text>Visi užduoti klausimai:</Text>
        {questions.map((question, i) => (
          <QuestionCard
            key={i}
            questionId={question.id}
            question={question}
            deleteFunction={deleteFunction}
            deleteAnswerFunction={deleteAnswerFunction}
            user={user}
            answers={answers}
            users={users}
            loggedIn={loggedIn}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-pozition:center;
  background-repeat: no-repeat;
`;

const Text = styled.h1`
  font-weight: bold;
`;
