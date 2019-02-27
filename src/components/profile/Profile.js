import React from 'react';
import {Button, Card, Col, Container, Form, ListGroup, Row} from 'react-bootstrap';

export const ProfileSettings = () => {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item active>Dashboard</ListGroup.Item>
              <ListGroup.Item>User Management</ListGroup.Item>
              <ListGroup.Item disabled>Used</ListGroup.Item>
              <ListGroup.Item>Enquiry</ListGroup.Item>
              <ListGroup.Item>Dealer</ListGroup.Item>
              <ListGroup.Item>Media</ListGroup.Item>
              <ListGroup.Item>Post</ListGroup.Item>
              <ListGroup.Item>Category</ListGroup.Item>
              <ListGroup.Item>New</ListGroup.Item>
              <ListGroup.Item>Comments</ListGroup.Item>
              <ListGroup.Item>Appearance</ListGroup.Item>
              <ListGroup.Item>Reports</ListGroup.Item>
              <ListGroup.Item>Settings</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <Row>
                  <Col md={12}>
                    <h4>Your Profile</h4>
                    <hr />
                  </Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <Form>
                      <Form.Group controlId="formUsername">
                        <Form.Label>User Name*</Form.Label>
                        <Form.Control name="username" type="text" required="required" placeholder="Username" />
                      </Form.Group>
                      <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" required="required" placeholder="password" />
                      </Form.Group>
                      <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="name" type="text" required="required" placeholder="First name" />
                      </Form.Group>
                      <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastname" type="text" required="required" placeholder="Last name" />
                      </Form.Group>
                      <Form.Group controlId="formemail">
                        <Form.Label>email</Form.Label>
                        <Form.Control name="lastname" type="email" required="required" placeholder="email" />
                      </Form.Group>
                      <Form.Group controlId="formpublicinfo">
                        <Form.Label>publicinfo</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
