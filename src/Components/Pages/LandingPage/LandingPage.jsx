import { Button, Col, Container, Row } from "react-bootstrap";
import "./LanddingPage.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const LandingPage = () => {
  //   useState(() => {
  //     const userInfo = localStorage.getItem("userInfo");
  //     if (userInfo) history.push("/mynotes");
  //   }, [history]);

  return (
    <div className="main">
      <Container>
        <div className="main-container">
          <h1 className="font-weight-bold  title">Welcome To Note Keeper</h1>

          <Row className="mx-auto w-50 mt-5 ">
            <Col className="text-center">
              <Link to="login">
                <Button size="lg" variant="outline-primary">
                  Log In
                </Button>{" "}
              </Link>
            </Col>
            <Col className="text-center">
              <Link to="register">
                <Button size="lg" variant="outline-success">
                  Sign Up
                </Button>{" "}
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
