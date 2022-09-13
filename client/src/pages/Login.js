import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 0.9em;
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const setErrorMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const loginMethod = () => {
    if (location.state && location.state.toCart === "true") {
      navigate("/register", { state: { toCart: "true" } });
    } else {
      navigate("/register");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!username || !password) {
      let errorMessage =
        "Please provide " +
        `${!username ? "Username," : ""}  ${!password ? "Password" : ""}`;
      setErrorMessage(errorMessage);
    } else {
      login(dispatch, { username, password }).then((value) => {
        if (value.status === 200) {
          toast.success(`Welcome, ${value.data.username}`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (value && value.status == 401) {
          setErrorMessage(value.data);
        } else {
          setErrorMessage("Something went wrong!");
        }
      });
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="Username*"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Password*"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <ToastContainer>Something went wrong...</ToastContainer>}
            Not have an account?
            <Link onClick={() => loginMethod()}>REGISTER</Link>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
