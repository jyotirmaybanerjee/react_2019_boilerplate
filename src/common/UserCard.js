import React from 'react';
import './styles/usercard.scss';

export const UserCard = ({user: {companyName, name, title, phone, email}}) => {
    return (
      <div className="items col-xs-12 col-sm-6 col-md-6 col-lg-6 clearfix">
        <div className="info-block block-info clearfix">
          <div className="square-box pull-left">
            <i className="fas fa-user" />
          </div>
          <h5>{companyName}</h5>
          <h4>Name: {name}</h4>
          <p>Title: {title}</p>
          <span>Phone: {phone}</span>
          <span>Email: {email}</span>
        </div>
      </div>
    );
}
