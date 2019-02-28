import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {TimeLine} from '../../../common/Timeline';

export const Events = () => {
    const timeLines = [
        {
            heading: 'Timeline Heading',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.',
            imgSrc: 'img/img13.png',
            time: '2018-02-23',
        }, {
            heading: 'Timeline Heading',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.',
            imgSrc: 'img/img13.png',
            time: '2018-02-23',
        }, {
            heading: 'Timeline Heading',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.',
            imgSrc: 'img/img13.png',
            time: '2018-02-23',
        }, {
            heading: 'Timeline Heading',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eaque amet deleniti hic quas qui cumque delectus aliquid, eius quia quod, quae, aliquam aspernatur facilis. Minima quod corporis dignissimos porro.',
            imgSrc: 'img/img13.png',
            time: '2018-02-23',
        },
    ];
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <TimeLine timeLines={timeLines} />
          </Col>
        </Row>
      </Container>
    );
}
