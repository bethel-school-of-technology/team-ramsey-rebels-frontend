import React, { useRef, useState } from "react";
import Navigation from "../Nav/Navigation";
import { Container, Button, Form, Card, Alert } from "react-bootstrap";
import { useAuth, AuthProvider } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"




export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try{
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/admin")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <> 
    <Navigation />
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Admin Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef}required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Pasword</Form.Label>
                <Form.Control type="password" ref={passwordRef}required/>
            </Form.Group>
            <Button disabled={loading} className="w-100"type="submit">Log In</Button>
            
          </Form>
      </Card.Body>
     
      <div className="w-100 text-center mb-3">
        Wanna be an Admin? <Link to="/AdminSignUp">Sign Up</Link>
      </div>
    
    </Card>
    
    </div>
    </Container>
    </AuthProvider>
    </>
  )
}