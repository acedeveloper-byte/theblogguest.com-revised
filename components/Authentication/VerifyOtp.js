'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- import router
import { Container, Form, Button, Card, InputGroup, Spinner } from "react-bootstrap";
import Swal from 'sweetalert2';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // <-- initialize router

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target;
    const otp = form.otp.value;

    try {
      const response = await fetch(`https://api.acedigitalsolution.com/auth/verify-otp/${otp}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (response.ok && data.baseResponse?.message === 'REQUEST_FULLFILLED') {
        Swal.fire({
          icon: 'success',
          title: 'OTP verified successfully!',
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();

        // ✅ Client-side navigation
        setTimeout(() => {
          router.push("/login");
        }, 1600); // small delay so Swal can finish
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Verification failed',
          text: data.message || 'Invalid OTP!',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Network Error',
        text: error.message || 'Unable to connect to server',
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
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          }}
        >
          <h2 className="mb-3 login-layout">OTP Verify</h2>

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <InputGroup>
                <Form.Control type="text" name="otp" placeholder="Enter OTP" required />
              </InputGroup>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3 login-button"
              disabled={isLoading}
            >
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
                  Verifying...
                </>
              ) : (
                'Verify'
              )}
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
