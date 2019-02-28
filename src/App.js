import React, { Component } from 'react';
// import {Container} from 'react-bootstrap';
import Drawer from 'rc-drawer';
import omit from 'omit.js';
import {Route} from 'react-router-dom';

import {Menu} from './common/Menu';
import {Home} from './components/home/components/Home';
import {UserSearch} from './components/users/Users';
import {Events} from './components/events/components/Events';
import {ProfileSettings} from './components/profile/Profile';

import './styles/App.scss';

class App extends Component {
    state = {
      open: false,
    };

    onMaskClick = () => {
      this.setState({
        open: false,
      });
    }

    onSwitch = () => {
      const {open} = this.state;
      this.setState({
        open: !open,
      });
    }

    render() {
        console.log(omit({ name: 'Benjy', age: 18 }, [ 'name' ])); // => { age: 18 }
        
        const {open} = this.state;
        return (
          <div>
            <Menu />
            <Drawer
              onChange={this.onChange}
              open={open}
              onMaskClick={this.onTouchEnd}
              handler={false}
              level={null}
              width="20vw"
            >
            menu children
            </Drawer>

            <Route exact path="/" component={Home} />
            <Route path="/events" component={Events} />
            <Route path="/usersearch" component={UserSearch} />
            <Route path="/profile" component={ProfileSettings} />
            {/* <h1 onClick={this.onSwitch}>My React App!</h1> 
            <Container className="h-100">
              <div className="d-flex justify-content-center h-100">
                <Search />
              </div>
            </Container>
            <UserSearch />

            <Container>
              <TimeLine timeLines={timeLines} />
            </Container>

            <Container>
              <ProfileSettings />
            </Container>
            */}
          </div>
        );
    }
}

export default App;
