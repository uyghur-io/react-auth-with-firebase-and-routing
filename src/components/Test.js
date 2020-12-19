import React, { useRaf } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

export default function Test() {
    const emailRaf = useRaf
    const passwordRaf = useRaf
    const passwordConfirmRaf = useRaf

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center md-4">Sign Up</h2>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                    </Form.Group>
                </Card.Body>
            </Card>
        </>
    )
}
