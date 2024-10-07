import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { logout } from "../../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const handleLogout = () => {
    if (userInfo) {
      dispatch(logout());
      history.push("/");
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        variant="primary"
        className="bg-primary position-sticky"
      >
        <Container>
          <Navbar.Brand href="#home" className="text-white font-weight-bold">
            <Link to="/">Note Keeper</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav>
                <Form inline>
                  <Row>
                    <Col xs="auto">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                      />
                    </Col>
                  </Row>
                </Form>
              </Nav>
            </Nav>
            <Nav>
              <Nav.Link className="text-white text-md">
                <Link to="mynotes">My Notes</Link>
              </Nav.Link>
              <NavDropdown
                title="Profile"
                className="text-white text-md"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/" className="text-sm">
                  MY Profile
                </NavDropdown.Item>
                <NavDropdown.Item className="text-sm" onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
