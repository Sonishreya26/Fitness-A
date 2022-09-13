import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 0.9em;
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

const Agreement = styled.span`
  font-size: 0.9em;
  margin: 20px 0px;
`;

const Button = styled.button`
  text-align: center;
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  display: block;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

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

  const handleClick = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      let errorMessage = `${!username ? "Username," : ""} ${
        !email ? "Email," : ""
      } ${!password ? "Password," : ""}is/are mandatory field(s)`;
      //   setError(errorMessage);
      setErrorMessage(errorMessage);
    } else {
      if (password != confirmPassword) {
        setErrorMessage("Passwords do not match");
        // setError("Passwords do not match");
      } else {
        setError("");
      }
    }
    let name = firstName + " " + lastName;
    register(dispatch, { name, username, email, password }).then((value) => {
      if (value === true) {
        toast.success("Registration Successful!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        let message =
          value.response && value.response.data && value.response.data.keyValue;
        if (message) {
          let errMessage = `${Object.keys(message)} => "${Object.values(
            message
          )}" already exists!`;
          setErrorMessage(errMessage);
        }
      }
    });
  };
  return (
    <Container>
      <ToastContainer />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Username*"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Email*"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password*"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(
                e.target.value != confirmPassword
                  ? "Passwords do not match"
                  : ""
              );
            }}
          />
          <Input
            placeholder="Confirm Password*"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError(
                e.target.value != password ? "Passwords do not match" : ""
              );
            }}
          />
          <Error>{error}</Error>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            REGISTER
          </Button>
        </Form>
        <p>
          Already registered?&nbsp;
          <Link onClick={() => navigate("/login")}>LOGIN</Link>
          <br />
        </p>
      </Wrapper>
    </Container>
  );
};

export default Register;
