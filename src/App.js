import React, { Component } from 'react';
// import {Container} from 'react-bootstrap';
import Drawer from 'rc-drawer';
import omit from 'omit.js';
import {Route, Switch} from 'react-router-dom';

import {Menu} from './common/Menu';
import {Home} from './components/home/components/Home';
import {Login} from './components/auth/components/Login';
import {Register} from './components/auth/components/Register';
import {UserSearch} from './components/users/Users';
import {Events} from './components/events/components/Events';
import {ProfileSettings} from './components/profile/Profile';
import {PrivateRoute} from './PrivateRoute';

import './styles/App.scss';

class App extends Component {
    state = {
      authed: false,
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
        
        const {authed, open} = this.state;
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/events" component={Events} />
              <Route path="/usersearch" component={UserSearch} />
              <PrivateRoute authed={authed} path='/profile' component={ProfileSettings} />
            </Switch>
            {/* <h1 onClick={this.onSwitch}>My React App!</h1> */}
          </div>
        );
    }
}

export default App;
