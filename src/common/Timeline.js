import React from 'react';
import {Row} from 'react-bootstrap';
import './styles/timeline.scss';

export const TimeLine = ({timeLines}) => {
    return (
      <div className="timeline">
        {timeLines.map(({heading, desc, imgSrc, time}) => (
          <Row className="no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
              <h3 className=" text-light">{heading}</h3>
              <p>{desc}</p>
            </div>
            <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <img src={imgSrc} className="img-fluid" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>{time}</time>
            </div>
          </Row>
        ))}
      </div>
    );
}
