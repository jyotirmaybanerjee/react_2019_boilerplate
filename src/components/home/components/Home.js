import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Flash} from '../../flash/Flash';
import {Slides} from '../../slides/components/Slide';

export const Home = () => {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>My React App!</h1>
            <Slides />
            <Flash />
          </Col>
        </Row>
      </Container>
    );
}
