import React, { useRaf } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function Signup() {
  const emailRaf = useRaf
  const passwordRaf = useRaf
  const passwordConfirmRaf = useRaf
    return (
        <>
          <Card>
              <Card.Body>
                  <h2 className="text-center md-4">Sign Up</h2>
                  <Form>
                      <Form.Group id="email">
                        <Form.Lable>Email</Form.Lable>
                        <Form.Control type="email" ref={emailRaf} required/>
                      </Form.Group>
                      <Form.Group id="password">
                        <Form.Lable>Password</Form.Lable>
                        <Form.Control type="password" ref={passwordRaf} required/>
                      </Form.Group>
                      <Form.Group id="password-confirm">
                        <Form.Lable>Password Confirmation</Form.Lable>
                        <Form.Control type="password" ref={passwordConfirmRaf} required/>
                      </Form.Group>
                      <Button className="w-100" type="submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
              Already have an account? Log In 
          </div>
        </>
    )
}
