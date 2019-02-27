import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
import Drawer from 'rc-drawer';
import omit from 'omit.js';
import {Menu} from './common/Menu';
import {Slides} from './components/Slide';
import {Flash} from './components/flash/Flash';
import {Search} from './common/Search';
import {UserSearch} from './components/users/Users';
import {TimeLine} from './common/Timeline';
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
          </div>
        );
    }
}

export default App;
