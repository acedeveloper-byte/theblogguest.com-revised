'use client'; // Only for App Router (remove if using Pages Router)

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Use 'next/router' if using Pages Router
import { Container, Form, Button, Card, InputGroup, Spinner } from "react-bootstrap";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import Swal from 'sweetalert2';

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const togglePassword = () => setPasswordShown(!passwordShown);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target;
        const user_name = form.elements.formUsername.value;
        const email = form.elements.formEmail.value;
        const password = form.elements.formPassword.value;

        try {
            const response = await fetch('https://api.acedigitalsolution.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registered successfully!',
                    showConfirmButton: false,
                    timer: 2000,
                });

                form.reset();

                // Redirect to Verify OTP page after 2 seconds
                setTimeout(() => {
                    router.push(`/verify-otp?email=${encodeURIComponent(email)}`);
                }, 2000);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Registration failed',
                    text: data.message || 'Something went wrong!',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message || 'Network error!',
            });
        } finally {
            setIsLoading(false);
        }
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
                                <Form.Control type="text" name="user_name" placeholder="Enter username" required />
                            </InputGroup>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaUser />
                                </InputGroup.Text>
                                <Form.Control type="email" name="email" placeholder="Enter email" required />
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
                                    name="password"
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

export default Register;
