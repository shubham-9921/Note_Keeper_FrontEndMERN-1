/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../MainScreen/MainScreen";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../Loading/Loading";
import ErrorScreen from "../../ErrorScreen/ErrorScreen";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userAction";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));

    // try {
    //   setLoading(true);
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    //   const { data } = await axios.post(
    //     "http://localhost:8081/api/users/login",
    //     {
    //       email,
    //       password,
    //     },
    //     config
    //   );

    //   localStorage.setItem("userInfo", JSON.stringify(data));
    //   setError(false);
    //   setLoading(false);
    //   history.push("/mynotes");
    // } catch (error) {
    //   setError(error.response.data.message);
    //   setLoading(false);
    // }
  };

  return (
    <>
      {loading && <Loading />}
      {error && (
        <ErrorScreen variant="danger"> Invalid Credentials ! </ErrorScreen>
      )}
      <MainScreen title="Login">
        <Container className="my-5 w-50">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </MainScreen>
    </>
  );
};

export default LoginScreen;
