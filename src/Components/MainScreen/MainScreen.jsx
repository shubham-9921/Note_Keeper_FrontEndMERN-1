/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Container, Row } from "react-bootstrap";

const MainScreen = ({ title, children }) => {
  return (
    <>
      {title && (
        <Container className="my-5">
          <Row className="my-4">
            <h1 className="heading">WelCome Back Shubham...</h1>
          </Row>
            <hr className="w-full"/>
          {children}
        </Container>
      )}
    </>
  );
};

export default MainScreen;
