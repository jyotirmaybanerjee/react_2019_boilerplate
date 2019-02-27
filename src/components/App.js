import React, { Component } from 'react';
import Drawer from 'rc-drawer';
import omit from 'omit.js';
import {Menu} from '../common/munu';
import {Slides} from './Slide';
import {Flash} from './flash/Flash';
import {Search} from '../common/Search';

import '../styles/App.scss';

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
            <h1 onClick={this.onSwitch}>My React App!</h1>
            <Slides />
            <Flash />
            <div className="container h-100">
              <div className="d-flex justify-content-center h-100">
                <Search />
              </div>
            </div>
          </div>
        );
    }
}

export default App;
