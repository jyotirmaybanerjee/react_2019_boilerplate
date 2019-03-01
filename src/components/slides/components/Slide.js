import React from 'react';
import {Carousel} from 'react-bootstrap';

export const Slides = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a1.odistatic.net/images/landingpages/airlines/1920x650/1920x650_landscape_02.jpg"
            alt="Tahiti1"
          />
          <Carousel.Caption>
            <h3>Tahiti</h3>
            <p>Landscape.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a1.odistatic.net/images/landingpages/airlines/1920x650/1920x650_summer_02.jpg"
            alt="Tahiti2"
          />
          <Carousel.Caption>
            <h3>Tahiti</h3>
            <p>Summer.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://a1.odistatic.net/images/landingpages/airlines/1920x650/1920x650_city_02.jpg"
            alt="Tahiti3"
          />
          <Carousel.Caption>
            <h3>Tahiti</h3>
            <p>City.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
