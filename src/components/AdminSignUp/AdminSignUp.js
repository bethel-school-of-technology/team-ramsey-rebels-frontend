import React, { useRef, useState } from "react";
import Navigation from "../Nav/Navigation";
import { Container, Button, Form, Card, Alert } from "react-bootstrap";
import { useAuth, AuthProvider } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"




export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError("Passwords don't match")
    }

    try{
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/adminlogin")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div className="signup-div"> 
    <Navigation />
    <AuthProvider>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Admin Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef}required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Must be at least 6 characters" type="password" ref={passwordRef}required/>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
                <Form.Control placeholder="Must be at least 6 characters" type="password" ref={passwordConfirmRef}required/>
            </Form.Group>
            <Button disabled={loading} className="w-100"type="submit">Sign Up</Button>
            
          </Form>
      </Card.Body>
     
      <div className="w-100 text-center mb-3">
        Already an Admin? <Link to="/AdminLogin">Log In</Link>
      </div>
    
    </Card>
    
    </div>
    </Container>
    </AuthProvider>
    </div>
  )
}
