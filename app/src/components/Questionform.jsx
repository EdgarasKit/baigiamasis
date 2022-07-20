import styled from "styled-components";
const Questionform = ({ addQuestion }) => {

  return (
    <Box>
      <Form onSubmit={addQuestion}>
        <TextArea
          type="text"
          name="question"
          id=""
          cols="70"
          rows="20"
          required
        ></TextArea>
        <Input type="submit" value="Užduoti klausimą" />
      </Form>
    </Box>
  );
};

export default Questionform;

const Box = styled.div`
  display: flex;
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
