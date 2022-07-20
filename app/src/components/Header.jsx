import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ loggedIn }) => {
  const loggout = () => {
    localStorage.removeItem("Token");
    window.location.reload();
  };

  return (
    <>
      {/* Inline funkcija jeigu vartotojas prisijunges atvaizduoja viena headere ir atvirksciai */}
      {loggedIn ? (
        <Box>
          <Button>
            <LinkText to="/addquestion">Užduoti klausimą</LinkText>
          </Button>
          <Button>
            <LinkText to="/" onClick={loggout}>
              Atsijungti
            </LinkText>
          </Button>
        </Box>
      ) : (
        <Box>
          <Button>
            <LinkText to="/register">Register</LinkText>
          </Button>
          <Button>
            <LinkText to="/login">Login</LinkText>
          </Button>
        </Box>
      )}
    </>
  );
};

export default Header;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: brown;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: grey;
  color: white;
  margin: 10px;
  border: none;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: white;
`;
