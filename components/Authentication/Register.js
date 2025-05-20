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
                    <h2 className="mb-3 login-layout">Register</h2>
<hr />
                    <Form>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter username" />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter email" />
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



                        <Button  type="submit" className="w-100 mb-3 login-button" >
                            Register
                        </Button>

                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
