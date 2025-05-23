'use client'
import { useState } from "react";
import { Container, Form, Button, Card, InputGroup, Spinner } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePassword = () => setPasswordShown(!passwordShown);; 

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert("Registered successfully!"); // Replace with actual logic
        }, 2000);
    };

    return (
        <div className="login-wrapper">
            <Container className="d-flex justify-content-center align-items-center py-5">
                <Card
                    className="p-4 login-card"
                    style={{
                        minWidth: '320px',
                        maxWidth: '400px',
                        width: '100%',
                        boxShadow:
                            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                    }}
                >
                    <h2 className="mb-3 login-layout">Register</h2>
                    <hr />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                                <Form.Control type="text" placeholder="Enter username" required />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                                <Form.Control type="email" placeholder="Enter email" required />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={passwordShown ? "text" : "password"}
                                    placeholder="Enter password"
                                    aria-label="Password"
                                    required
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

                        <Button type="submit" className="w-100 mb-3 login-button" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        className="me-2"
                                    />
                                    Registering...
                                </>
                            ) : (
                                'Register'
                            )}
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
