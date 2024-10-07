import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import MainScreen from "../../MainScreen/MainScreen";
import Loading from "../../Loading/Loading";
import ErrorScreen from "../../ErrorScreen/ErrorScreen";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../actions/userAction";

const RegisterScreen = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confrimPassword, setConfrimPassword] = useState(null);
  const [pictureMessage, setpictureMessage] = useState(null);
  const [message, setMessage] = useState(null);
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(register(name, email, password, pic));

    if (password !== confrimPassword) {
      setMessage("Passwords do not match");
    }
    // else {
    //   try {
    //     setLoading(true);
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     };

    //     const { data } = await axios.post(
    //       "http://localhost:8081/api/users/register",
    //       { name, email, password, pic },
    //       config
    //     );

    //     if (data) {
    //       setLoading(false);
    //       localStorage.setItem("userInfo", JSON.stringify(data));
    //       setpictureMessage("Registeration Successful !");
    //       history.push("/login");
    //     }
    //   } catch (error) {
    //     setError(error.response.data.message);
    //     setLoading(false);
    //   }
    // }
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setpictureMessage("Please Select Image");
    }
    setpictureMessage(null);

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notekeeper");
      data.append("cloud_name", "dv26uihbj");
      fetch("https://api.cloudinary.com/v1_1/dv26uihbj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return setpictureMessage("Please Select an Image");
    }
  };

  return (
    <>
      <MainScreen title="Regiter">
        {loading && <Loading></Loading>}
        {error && <ErrorScreen variant="danger">{error}</ErrorScreen>}
        {message && <ErrorScreen variant="danger">{message}</ErrorScreen>}

        <Container className="p-5 my-5 w-50">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                type="text"
                placeholder="Enter Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfrimPassword">
              <Form.Label>Confrim Password</Form.Label>
              <Form.Control
                value={confrimPassword}
                type="text"
                placeholder=" Confrim Password"
                onChange={(e) => setConfrimPassword(e.target.value)}
              />
            </Form.Group>
            {pictureMessage && (
              <ErrorScreen variant="danger">{pictureMessage}</ErrorScreen>
            )}

            <Form.Group className="mb-3" controlId="pic">
              <Form.Label>Upload Pic</Form.Label>
              <Form.Control
                id="custom-file"
                type="file"
                label="Upload Profile Picture"
                custom
                onChange={(e) => postDetails(e.target.files[0])}
                // value={picture}
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

export default RegisterScreen;
