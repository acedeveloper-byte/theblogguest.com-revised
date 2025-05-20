'use client'
import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => setPasswordShown(!passwordShown);

  return (
    <div className="login-wrapper">
      <Container className="d-flex justify-content-center align-items-center py-5">
        <Card className="p-4 login-card" style={{ minWidth: '320px', maxWidth: '400px', width: '100%', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;' }}>
          <h2 className="mb-3 login-layout">Log in</h2>
          <p>
            Need a Mailchimp account?{" "}
            <a href="#" className="text-decoration-none link-primary">
              Create an account
            </a>
          </p>

          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username or Email</Form.Label>
              <InputGroup>
                <InputGroup.Text>
                  <FaUser />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Enter username or email" />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter password"
                  aria-label="Password"
                />
                <InputGroup.Text
                  onClick={togglePassword}
                  style={{ cursor: "pointer" }}
                  aria-label="Toggle password visibility"
                >
                  {passwordShown ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Keep me logged in" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-3 login-button">
              Log in
            </Button>

            <Row>
              <Col className="text-start">
                <a href="#" className="text-decoration-none link-secondary">
                  Forgot username?
                </a>
              </Col>
              <Col className="text-end">
                <a href="#" className="text-decoration-none link-secondary">
                  Forgot password?
                </a>
              </Col>
            </Row>

            <div className="mt-3 text-center">
              <a href="#" className="text-decoration-none link-secondary">
                Can't log in?
              </a>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
