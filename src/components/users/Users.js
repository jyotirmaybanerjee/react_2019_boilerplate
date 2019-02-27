import React from 'react';
import {Container, Row} from 'react-bootstrap';
// import './styles/usercard.scss';
import {UserCard} from '../../common/UserCard';

export const UserSearch = () => {
    const users = [
        {
            companyName: 'ABC',
            name: 'Tyreese Burn',
            title: 'Manager',
            phone: 123-456-7890,
            email: 'tb@AbortController.com',
        }, {
            companyName: 'ABC',
            name: 'Tyreese Burn',
            title: 'Manager',
            phone: 123-456-7890,
            email: 'tb@AbortController.com',
        }, {
            companyName: 'ABC',
            name: 'Tyreese Burn',
            title: 'Manager',
            phone: 123-456-7890,
            email: 'tb@AbortController.com',
        }, {
            companyName: 'ABC',
            name: 'Tyreese Burn',
            title: 'Manager',
            phone: 123-456-7890,
            email: 'tb@AbortController.com',
        },
    ];
    return (
      <Container>
        <Row>
          <h2>Filtered List</h2>
          <div className="col-lg-12">
            <input type="search" className="form-control" id="input-search" placeholder="Search Attendees..." />
          </div>
          {users.map(user => <UserCard user={user} />)}
        </Row>
      </Container>
    );
}
