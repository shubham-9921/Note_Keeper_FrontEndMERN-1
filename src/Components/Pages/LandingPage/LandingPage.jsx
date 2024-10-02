import { Button, Col, Container, Row } from "react-bootstrap"
import "./LanddingPage.css"
const LandingPage = () => {
  return (
    <div className='main'> 

    <Container>

      
        <div className="main-container">
          <h1 className="font-weight-bold  title">Welcome To Note Keeper</h1>
      

        <Row  className="mx-auto w-50 mt-5 ">
          <Col className="text-center">
          <Button size="lg" variant="outline-primary">Log In</Button>{' '}
          </Col>
          <Col  className="text-center">
          <Button size="lg" variant="outline-success">Sign Up</Button>{' '}
          </Col>
        </Row>
        </div>
       
     
    

    </Container>

    </div>
  )
}

export default LandingPage
