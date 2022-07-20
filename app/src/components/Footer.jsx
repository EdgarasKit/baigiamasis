import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Box>
        <Text>&copy; 2022 </Text>
      </Box>
    </>
  );
};

export default Footer;

const Box = styled.div`
  display: flex;
  justify-content: center;
  background-color: brown;
`;
const Text = styled.div`
  color: white;
`;
